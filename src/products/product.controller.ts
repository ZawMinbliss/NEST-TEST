/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(
    @Body() completeBody: { title: string; description: string; price: number },
  ) {
    const result = await this.productService.insertProduct(
      completeBody.title,
      completeBody.description,
      completeBody.price,
    );
    return result;
  }
  @Get()
  async getAllProducts() {
    const products = await this.productService.getProducts();

    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }
}
