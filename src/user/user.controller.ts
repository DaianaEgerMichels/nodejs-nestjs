import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserCreateDTO } from './dto/UserCreate.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser: UserCreateDTO) {
    const userEntity = new UserEntity();
    userEntity.name = dataUser.name;
    userEntity.email = dataUser.email;
    userEntity.password = dataUser.password;
    userEntity.id = uuid();
    this.userRepository.save(userEntity);
    return {
      id: userEntity.id,
      message: 'User created successfully',
    };
  }

  @Get()
  async getUsers() {
    return this.userRepository.findAll();
  }
}
