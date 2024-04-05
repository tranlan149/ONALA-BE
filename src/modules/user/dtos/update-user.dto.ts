import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsString, IsEnum } from 'class-validator';
import { UserRole } from 'src/constant/enum';

export class UpdateUserDTO {
  @IsString()
  username?: string;


  @ApiProperty({
    example: 'rehmat.sayani@gmail.com',
    required: true,
  })
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: '1234578910',
    required: true,
  })
  @IsString()
  @MinLength(6)
  password?: string;

  @IsString()
  phone?: string;

  @IsString()
  address?: string;

  @ApiProperty({ default: 1, example: 'Admin|User|Guest', required: true })
  @IsEnum(UserRole)
  role?: UserRole;
  
}
