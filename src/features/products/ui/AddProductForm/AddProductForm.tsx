import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import styles from './AddProductForm.module.css';
import crossIcon from '@/assets/icons/cross.svg';

const addProductSchema = z.object({
  name: z.string().min(1, 'Наименование обязательно'),
  price: z.coerce.number().positive('Цена должна быть положительной'),
  vendor: z.string().min(1, 'Вендор обязателен'),
  article: z.string().min(1, 'Артикул обязателен'),
});

export type AddProductFormValues = z.infer<typeof addProductSchema>;

interface AddProductFormProps {
  onClose: () => void;
  onAddProduct: (data: AddProductFormValues) => void;
}

export const AddProductForm: React.FC<AddProductFormProps> = ({
  onClose,
  onAddProduct,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: '',
      price: 0,
      vendor: '',
      article: '',
    },
  });

  const onSubmit = (data: AddProductFormValues) => {
    onAddProduct(data);
    onClose();
    alert(`Товар "${data.name}" успешно добавлен!`);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src={crossIcon} alt="Close" />
        </button>
        <h2 className={styles.title}>Добавить товар</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
