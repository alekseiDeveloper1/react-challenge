import { useState } from 'react';
import { useProducts } from '@/features/products/hooks/useProducts';
import { ProductsTable } from '@/features/products/ui/ProductsTable/ProductsTable';
import styles from './ProductsPage.module.css';
import { Input } from '@/components/ui/Input/Input';
import search from '@/assets/icons/search.svg';

export const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError, error } = useProducts(searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageInner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Товары</h1>
          <div className={styles.searchInputWrapper}>
            <Input
              placeholder="Найти"
              aria-label="Найти товары"
              icon={search}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </header>
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
