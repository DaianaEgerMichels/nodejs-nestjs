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

  async updated(id: string, dataUserForUpdated: Partial<UserEntity>) {
    const userExists = this.findById(id);

    Object.entries(dataUserForUpdated).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      userExists[key] = value;
    });

    return userExists;
  }

  async remove(id: string) {
    const user = this.findById(id);

    this.users = this.users.filter((user) => user.id !== id);

    return user;
  }

  private findById(id: string) {
    const userExists = this.users.find((user) => user.id === id);

    if (!userExists) {
      throw new Error('User not found');
    }

    return userExists;
  }
}
