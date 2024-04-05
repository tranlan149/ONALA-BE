import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsString, IsEnum, IsOptional } from 'class-validator';
import { UserGender, UserRole } from 'src/constant/enum';

export class CreateUserDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    example: 'rehmat.sayani@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123@123a',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  avatar: string;

  
  @ApiProperty()
  @IsOptional()
  @IsEnum(UserGender)
  gender: UserGender;

  // @ApiProperty({ default: 1, required: true })
  // @IsOptional()
  // @IsEnum(UserRole)
  // role: UserRole;
}
