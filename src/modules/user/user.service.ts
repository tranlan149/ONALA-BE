import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserGender } from 'src/constant/enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findAll() {
    return await this.userRepository.find();
  }

  async findUserBy(data) {
    const user = await this.userRepository.findOne({where:{email: data.email}});
    console.log(user, 'user');
    
    return user
  }
  async create(userData: CreateUserDto): Promise<User> {
    const gender = userData.gender
    if (gender === UserGender.MALE) {
      userData.avatar = 'http://surl.li/rrtgf';
    } else if (gender === UserGender.FEMALE) {
      userData.avatar = 'http://surl.li/rrtpe';
    } else {
      userData.avatar = 'http://surl.li/rrtgf';
    }
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  async update(id, userData: UpdateUserDTO): Promise<User> {
    await this.userRepository.update(id, userData);
    return await this.userRepository.findOne(id);
  }

  async findOneByEmail(email: any) {
    const data = await this.userRepository.findOneBy({ email: email });
    console.log(data, 'data');
    return data;
  }
}
