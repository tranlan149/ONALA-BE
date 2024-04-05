import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class ResponseSuccess {
  public readonly message: string = 'Success';
  public readonly success: boolean = true;
  public total: number;
  public data: any;
  public currentPage: number;

  constructor(data: any, total: number, currentPage?: number) {
    if (!data) {
      return;
    }
    if (data && typeof data === 'object' && data.data) {
      this.data = data.data;
    } else {
      this.data = data;
    }
    if (total !== undefined && total !== null) {
      delete data.total;
      this.total = total;
    }
    if (currentPage !== undefined && currentPage !== null) {
      delete data.currentPage;
      this.currentPage = currentPage;
    }
  }
}

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map(data => new ResponseSuccess(data, data?.total, data?.currentPage)),
      );
  }
}
