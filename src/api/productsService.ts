import { api } from './index';
import type { ProductsResponse } from '../types/product';

export const productsService = {
  getProducts: async (searchTerm?: string): Promise<ProductsResponse> => {
    const url = searchTerm ? `/products/search?q=${searchTerm}` : '/products';
    const { data } = await api.get<ProductsResponse>(url);
    return data;
  },
  addProduct: async (newProduct: { title: string }): Promise<void> => {
    console.log('Adding product (mock):', newProduct);
    return Promise.resolve();
  },
};
