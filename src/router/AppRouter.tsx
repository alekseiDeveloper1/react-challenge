import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/auth/LoginPage/LoginPage'

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
  </Routes>
)

