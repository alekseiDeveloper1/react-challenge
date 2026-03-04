import React, { useState } from 'react';
import { ProductsHeader } from '@/features/products/ui/ProductsHeader/ProductsHeader';
import { ProductsTable } from '@/features/products/ui/ProductsTable/ProductsTable';
import { AddProductForm } from '@/features/products/ui/AddProductForm/AddProductForm';
import { useProducts } from '@/features/products/hooks/useProducts';
import type { AddProductFormValues } from '@/types/product.ts';
import styles from './ProductsPage.module.css';

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError, error } = useProducts(searchTerm);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleAddProduct = (data: AddProductFormValues) => {
    console.log('New product data:', data);
    // Here you would typically call a mutation to add the product
  };

  return (
    <div className={styles.container}>
      <ProductsHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <ProductsTable
        products={data?.products}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onAddProduct={() => setAddModalOpen(true)}
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
