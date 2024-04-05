import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

function toValidate(metatype: Function): boolean {
  const types: Function[] = [String, Boolean, Number, Array, Object];
  return !types.includes(metatype);
}

@Injectable()
export class ValidationBodyPipe implements PipeTransform<any> {
  async transform(value: any, { metatype, type }: ArgumentMetadata) {
    if (type !== 'body') {
      return value;
    }
    if (!metatype || !toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      if (errors[0].constraints) {
        throw new BadRequestException(
          errors[0].constraints[Object.keys(errors[0].constraints)[0]],
        );
      } else if (errors[0].children.length > 0) {
        findError(errors[0].children);
      }
    }
    return object;
  }
}

@Injectable()
export class ValidationQueryPipe implements PipeTransform<any> {
  async transform(value: any, { metatype, type }: ArgumentMetadata) {
    if (type !== 'query') {
      return value;
    }
    if (!metatype || !toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      if (errors[0].constraints) {
        throw new BadRequestException(
          errors[0].constraints[Object.keys(errors[0].constraints)[0]],
        );
      } else if (errors[0].children.length > 0) {
        findError(errors[0].children);
      }
    }
    return value;
  }
}

function findError(currentNode) {
  for (const index in currentNode[0].children) {
    const node = currentNode[0].children[index];
    if (node.constraints) {
      throw new BadRequestException(
        node.constraints[Object.keys(node.constraints)[0]],
      );
    }
    findError(node);
  }
}
