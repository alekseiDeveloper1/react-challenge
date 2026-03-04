import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  brand: z.string(),
  sku: z.string(),
  rating: z.float32(),
  price: z.number(),
  thumbnail: z.string().url({ message: 'Invalid URL format' }),
});

export const ProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;

export const AddProductSchema = z.object({
  name: z.string().min(1, 'Наименование обязательно'),
  price: z.coerce.number().positive('Цена должна быть положительной'),
  vendor: z.string().min(1, 'Вендор обязателен'),
  article: z.string().min(1, 'Артикул обязателен'),
});

export type AddProductFormValues = z.infer<typeof AddProductSchema>;
