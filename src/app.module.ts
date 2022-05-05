import { ProductModule } from './products/product.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products/product.model';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
