import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import styles from './AddProductForm.module.css';
import crossIcon from '@/assets/icons/cross.svg';
import { useAddProductForm } from '@/features/products/hooks/useAddProductForm.ts';
import type { AddProductFormValues } from '@/types/product.ts';

interface AddProductFormProps {
  onClose: () => void;
  onAddProduct: (data: AddProductFormValues) => void;
}

export const AddProductForm = ({
  onClose,
  onAddProduct,
}: AddProductFormProps) => {
  const { register, handleSubmit, errors } = useAddProductForm({
    onClose,
    onAddProduct,
  });

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={crossIcon} alt="Close" />
        </button>
        <h2 className={styles.title}>Добавить товар</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            id="name"
            {...register('name')}
            label="Наименование"
            error={errors.name?.message}
            className={styles.field}
          />
          <Input
            id="price"
            {...register('price')}
            label="Цена"
            type="number"
            error={errors.price?.message}
            className={styles.field}
          />
          <Input
            id="vendor"
            {...register('vendor')}
            label="Вендор"
            error={errors.vendor?.message}
            className={styles.field}
          />
          <Input
            id="article"
            {...register('article')}
            label="Артикул"
            error={errors.article?.message}
            className={styles.field}
          />
          <Button type="submit" className={styles.button}>
            Добавить
          </Button>
        </form>
      </div>
    </div>
  );
};
