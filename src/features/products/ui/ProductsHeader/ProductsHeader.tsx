import styles from '@/features/products/ui/ProductsHeader/ProductsHeader.module.css';
import { Input } from '@/components/ui/Input/Input.tsx';
import search from '@/assets/icons/search.svg';

interface ProductsHeaderProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductsHeader = ({
  searchTerm,
  handleSearch,
}: ProductsHeaderProps) => {
  return (
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
  );
};
