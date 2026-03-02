import { ProductsTable } from '@/features/products/ui/ProductsTable/ProductsTable';
import styles from './ProductsPage.module.css';

export const ProductsPage = () => (
  <div className={styles.page}>
    <div className={styles.pageInner}>
      <ProductsTable />
    </div>
  </div>
);
