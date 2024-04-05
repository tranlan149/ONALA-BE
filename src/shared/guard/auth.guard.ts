// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken';
import { UserRole } from 'src/constant/enum';

interface DecodedToken {
  role: string; // Định nghĩa kiểu cho thuộc tính role
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return false;
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET ) as DecodedToken; // Ép kiểu cho decoded
      console.log(decoded, 'decoded');
      request.user = decoded;
      const check = (+decoded.role === UserRole.ADMIN) || (+decoded.role === UserRole.GUEST)? true : false;
      return check
      // return roles.includes(decoded.role);
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
