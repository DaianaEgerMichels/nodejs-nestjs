import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserCreateDTO } from './dto/UserCreate.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/ListUser.dto';
import { UserUpdateDTO } from './dto/UserUpdate.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private readonly userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() dataUser: UserCreateDTO) {
    const userEntity = new UserEntity();
    userEntity.name = dataUser.name;
    userEntity.email = dataUser.email;
    userEntity.password = dataUser.password;
    userEntity.id = uuid();
    this.userRepository.save(userEntity);
    return {
      id: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'User created successfully',
    };
  }

  @Get()
  async getUsers() {
    const usersList = await this.userService.listUsers();
    return usersList;
  }

  @Put('/:id')
  async updatedUser(@Param('id') id: string, @Body() dataUser: UserUpdateDTO) {
    const updatedUser = await this.userRepository.updated(id, dataUser);
    return {
      user: updatedUser,
      message: 'User updated successfully',
    };
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string) {
    const userRemoved = await this.userRepository.remove(id);
    return {
      user: userRemoved,
      message: 'User removed successfully',
    };
  }
}
