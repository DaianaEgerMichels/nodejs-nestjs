import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { ListUserDTO } from './dto/ListUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listUsers(): Promise<ListUserDTO[]> {
    const users = await this.userRepository.find();
    const usersList = users.map((user) => new ListUserDTO(user.id, user.name));
    return usersList;
  }
}
