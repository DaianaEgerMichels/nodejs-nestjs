import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async save(user) {
    this.products.push(user);
    console.log(this.products);
  }

  async findAll() {
    return this.products;
  }
}
