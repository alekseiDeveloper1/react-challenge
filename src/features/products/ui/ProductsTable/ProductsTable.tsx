import styles from './ProductsTable.module.css';
import { Button } from '@/components/ui/Button/Button';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import arrowsClockwise from '@/assets/icons/ArrowsClockwise.svg';
import btn from '@/assets/icons/btn.svg';
import { Spinner } from '@/components/Spinner';
import { Error } from '@/components/Error';
import type { Product } from '@/types/product';
import cn from 'classnames';

interface ProductsTableProps {
  products?: Product[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onAddProduct: () => void;
  onSort: (key: keyof Product) => void;
  sortKey: keyof Product | null;
  sortOrder: 'asc' | 'desc';
}

export const ProductsTable = ({
  products,
  isLoading,
  isError,
  error,
  onAddProduct,
  onSort,
  sortKey,
  sortOrder,
}: ProductsTableProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error message={error?.message || 'Something went wrong'} />;
  }

  const getSortClassName = (key: keyof Product) => {
    if (sortKey !== key) return '';
    return sortOrder === 'asc' ? styles.sortAsc : styles.sortDesc;
  };

  return (
    <section>
      <div className={styles.headerActions}>
        <div className={styles.sectionTitle}>Все позиции</div>
        <div className={styles.headerActionsBtn}>
          <Button
            icon={arrowsClockwise}
            variant="transparent"
            className={styles.headerIconButton}
            aria-label="Обновить список товаров"
          />
          <Button className={styles.headerPrimaryButton} onClick={onAddProduct}>
            Добавить
          </Button>
        </div>
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.rowHead}`}>
          <div className={styles.cellCheckbox}>
            <Checkbox aria-label="Выбрать все позиции" />
          </div>
          <div
            className={cn(styles.cellName, styles.sortable, getSortClassName('title'))}
            onClick={() => onSort('title')}
          >
            Наименование
          </div>
          <div
            className={cn(styles.cellVendor, styles.sortable, getSortClassName('brand'))}
            onClick={() => onSort('brand')}
          >
            Вендор
          </div>
          <div
            className={cn(styles.cellSku, styles.sortable, getSortClassName('sku'))}
            onClick={() => onSort('sku')}
          >
            Артикул
          </div>
          <div
            className={cn(styles.cellRating, styles.sortable, getSortClassName('rating'))}
            onClick={() => onSort('rating')}
          >
            Оценка
          </div>
          <div
            className={cn(styles.cellPrice, styles.sortable, getSortClassName('price'))}
            onClick={() => onSort('price')}
          >
            Цена, ₽
          </div>
          <div className={styles.cellActions} />
        </div>

        {products?.map((product) => (
          <div key={product.id} className={styles.row}>
            <div className={styles.cellCheckbox}>
              <Checkbox aria-label={`Выбрать товар ${product.title}`} />
            </div>

            <div className={styles.cellName}>
              <div className={styles.cellNamePrimary}>{product.title}</div>
            </div>

            <div className={styles.cellVendor}>{product.brand ?? '—'}</div>
            <div className={styles.cellSku}>{product.sku}</div>
            <div
              className={`${styles.cellRatingValue} ${
                product.rating < 3 ? styles.lowRating : ''
              }`}
            >
              {product.rating}
            </div>
            <div className={styles.cellPriceValue}>{product.price}</div>
            <div className={styles.btnWrap}>
              <div className={styles.cellQuantity}>
                <Button
                  variant="small"
                  aria-label={`Добавить единицу товара ${product.title}`}
                >
                  +
                </Button>
              </div>

              <div className={styles.cellActions}>
                <Button
                  variant="small-transparent"
                  aria-label={`Дополнительные действия с товаром ${product.title}`}
                  icon={btn}
                ></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
