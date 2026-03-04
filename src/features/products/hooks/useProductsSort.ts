import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '@/types/product';

type SortableKeys = keyof Product;
type SortOrder = 'asc' | 'desc';

export const useProductsSort = (products?: Product[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortKey = searchParams.get('sort_key') as SortableKeys | null;
  const sortOrder =
    (searchParams.get('sort_order') as SortOrder | null) || 'asc';

  const sortedProducts = useMemo(() => {
    if (!products || !sortKey) {
      return products;
    }

    return [...products].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [products, sortKey, sortOrder]);

  const handleSort = (key: SortableKeys) => {
    const newSortOrder =
      sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSearchParams({ sort_key: key, sort_order: newSortOrder });
  };

  return { sortedProducts, handleSort, sortKey, sortOrder };
};
