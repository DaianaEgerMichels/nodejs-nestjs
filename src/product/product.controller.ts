import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() dataProduct) {
    this.productRepository.save(dataProduct);
    return dataProduct;
  }

  @Get()
  async getAllProducts() {
    return this.productRepository.findAll();
  }
}
