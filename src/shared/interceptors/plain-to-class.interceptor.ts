import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { from, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { httpInternalServerErrorException } from '../exceptions/http-exception';

interface IClassType<T> {
  new (): T;
}

@Injectable()
export class PlainToClassTransformInterceptor<T>
  implements NestInterceptor<Partial<T>, T>
{
  constructor(private readonly classType: IClassType<T>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    return next.handle().pipe(
      map(data => plainToClass(this.classType, data)),
      map(data =>
        from(validate(data as Object)).pipe(
          map(error => {
            console.log(error);
            if (error.length > 0) {
              console.log(error[0]?.children[0]);
              httpInternalServerErrorException();
            }
            return data;
          }),
        ),
      ),
      mergeMap(data => data),
    );
  }
}
