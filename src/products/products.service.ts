/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProductsService {
  async getProducts(): Promise<any> {
    return await axios.get('https://dummyjson.com/products');
  }

  async getProduct(id): Promise<any> {
    return await axios.get('https://dummyjson.com/products/1');
    //   .then((res) => res.json())
    //   .then(console.log);
  }

  async addProduct(product): Promise<any> {
    return await axios.post('https://dummyjson.com/products/add', {
      title: 'BMW Pencil',
    });
    // .then((res) => res.json())
    // .then(console.log);
  }

  async updateProduct(product): Promise<any> {
    return await axios.post('https://dummyjson.com/products/1', {
      method: 'PUT' /* or PATCH */,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'iPhone Galaxy +1',
      }),
    });
    //   .then((res) => res.json())
    //   .then(console.log);
  }

  async deleteProduct(product): Promise<any> {
    return await axios.post('https://dummyjson.com/products/1', {
      method: 'DELETE',
    });
    //   .then((res) => res.json())
    //   .then(console.log);
  }
}
