import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products')
  getProducts(): any {
    return this.appService.getProducts();
  }

  @Get('/products/:id')
  getProduct(id: number): any {
    return this.appService.getProduct(id);
  }

  @Post('/products/add')
  addProduct(product: any): any {
    return this.appService.addProduct(product);
  }

  @Post('/products/update')
  updateProduct(product: any): any {
    return this.appService.updateProduct(product);
  }

  @Post('/products/delete')
  deleteProduct(id: number): any {
    return this.appService.deleteProduct(id);
  }
}
