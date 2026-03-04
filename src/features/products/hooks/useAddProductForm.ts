import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AddProductFormValues } from '@/types/product.ts';
import { AddProductSchema } from '@/types/product.ts';

interface UseAddProductFormProps {
  onClose: () => void;
  onAddProduct: (data: AddProductFormValues) => void;
}
export const useAddProductForm = ({
  onClose,
  onAddProduct,
}: UseAddProductFormProps) => {
  const form = useForm({
    resolver: zodResolver(AddProductSchema),
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

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
  };
};
