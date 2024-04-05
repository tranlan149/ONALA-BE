import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dtos/update-user.dto';

@ApiTags('User')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    ) {}
  @Get()

  findAllUsers() {
    return this.userService.findAll();
  }


}
