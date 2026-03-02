import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/pages/auth/LoginPage/LoginPage';
import { ProductsPage } from '@/pages/products/ProductsPage/ProductsPage';

export const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<ProductsPage />} />
  </Routes>
);
