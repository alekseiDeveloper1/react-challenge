import { useQuery } from '@tanstack/react-query';
import { productsService } from '@/api/productsService.ts';

const PRODUCTS_QUERY_KEY = 'products';

export const useProducts = (searchTerm?: string) => {
  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEY, searchTerm],
    queryFn: ({ signal }) => productsService.getProducts(searchTerm, signal),
  });
};
