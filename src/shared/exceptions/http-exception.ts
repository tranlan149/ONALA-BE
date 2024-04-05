import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

// 400
export function httpBadRequest(message?: string) {
  throw new BadRequestException(message);
}

// 401
export function httpUnAuthorized(message?: string) {
  throw new UnauthorizedException(message);
}

// 403
export function httpForbidden(message?: string) {
  throw new ForbiddenException(message);
}

// 404
export function httpNotFound(message?: string) {
  throw new NotFoundException(message);
}

export function httpConflict(message?: string) {
  throw new ConflictException(message);
}

// 500
export function httpInternalServerErrorException(message?: string) {
  throw new InternalServerErrorException(message);
}
