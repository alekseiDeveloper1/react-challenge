import { api } from './index';
import type { ProductsResponse } from '../types/product';

export const productsService = {
  getProducts: async (
    searchTerm?: string,
    signal?: AbortSignal,
  ): Promise<ProductsResponse> => {
    const url = searchTerm ? `/products/search` : '/products';
    const { data } = await api.get<ProductsResponse>(url, {
      signal,
      params: { q: searchTerm },
    });
    return data;
  },
};
