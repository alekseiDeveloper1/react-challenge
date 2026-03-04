import React, { useState } from 'react';
import { ProductsHeader } from '@/features/products/ui/ProductsHeader/ProductsHeader';
import { ProductsTable } from '@/features/products/ui/ProductsTable/ProductsTable';
import { AddProductForm } from '@/features/products/ui/AddProductForm/AddProductForm';
import { useProducts } from '@/features/products/hooks/useProducts';
import { useProductsSort } from '@/features/products/hooks/useProductsSort';
import { useDebounce } from '@/features/products/hooks/useDebounce';
import type { AddProductFormValues } from '@/types/product.ts';
import styles from './ProductsPage.module.css';

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { data, isLoading, isError, error } = useProducts(debouncedSearch);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const { sortedProducts, handleSort, sortKey, sortOrder } = useProductsSort(
    data?.products,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddProduct = (data: AddProductFormValues) => {
    console.log('New product data:', data);
  };

  return (
    <div className={styles.container}>
      <ProductsHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <ProductsTable
        products={sortedProducts}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onAddProduct={() => setAddModalOpen(true)}
        onSort={handleSort}
        sortKey={sortKey}
        sortOrder={sortOrder}
      />
      {isAddModalOpen && (
        <AddProductForm
          onClose={() => setAddModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}
    </div>
  );
};
