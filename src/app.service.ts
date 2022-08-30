import { Injectable } from '@nestjs/common';
import { ProductsService } from './products/products.service';

@Injectable()
export class AppService {
  constructor(private readonly productsService: ProductsService) {}

  async getProducts(): Promise<any> {
    return await this.productsService.getProducts();
  }

  async getProduct(id: number): Promise<any> {
    return await this.productsService.getProduct(id);
  }

  async addProduct(product: any): Promise<any> {
    return await this.productsService.addProduct(product);
  }

  async updateProduct(product: any): Promise<any> {
    return await this.productsService.updateProduct(product);
  }

  async deleteProduct(id: number): Promise<any> {
    return await this.productsService.deleteProduct(id);
  }
}
