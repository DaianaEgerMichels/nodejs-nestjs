import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserCreateDTO } from './dto/UserCreate.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() dataUser: UserCreateDTO) {
    this.userRepository.save(dataUser);
    return dataUser;
  }

  @Get()
  async getUsers() {
    return this.userRepository.findAll();
  }
}
