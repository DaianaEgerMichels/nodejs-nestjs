import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
    console.log(this.users);
  }

  async findAll() {
    return this.users;
  }

  async existsEmail(email: string) {
    const existsUser = this.users.find((user) => user.email === email);
    return existsUser !== undefined;
  }
}
