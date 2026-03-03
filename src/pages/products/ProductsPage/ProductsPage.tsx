import { useState } from 'react';
import { useProducts } from '@/features/products/hooks/useProducts';
import { ProductsTable } from '@/features/products/ui/ProductsTable/ProductsTable';
import styles from './ProductsPage.module.css';
import { ProductsHeader } from '@/features/products/ui/ProductsHeader/ProductsHeader.tsx';

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError, error } = useProducts(searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <ProductsHeader searchTerm={searchTerm} handleSearch={handleSearch} />
        <ProductsTable
          products={data?.products}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </div>
    </div>
  );
};
