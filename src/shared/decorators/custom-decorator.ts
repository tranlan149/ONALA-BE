import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "src/modules/user/dtos/create-user.dto";

export function ApiResponseAndBodyForCreateUser() {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
      ApiResponse({ status: 201, description: 'The record has been successfully created.' })(target, key, descriptor);
      ApiResponse({ status: 403, description: 'Forbidden.' })(target, key, descriptor);
      ApiBody({ type: CreateUserDto, description: 'Json structure for user object' })(target, key, descriptor);
    }
  }

  export function ApiResponseCreate() {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
      ApiResponse({ status: 201, description: 'The record has been successfully created.' })(target, key, descriptor);
      ApiResponse({ status: 403, description: 'Forbidden.' })(target, key, descriptor);
    }
  }