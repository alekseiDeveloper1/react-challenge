import { LoginForm } from '@/features/auth/ui/LoginForm/LoginForm'
import styles from './LoginPage.module.css'

export const LoginPage = () => (
  <div className={styles['login-page']}>
    <LoginForm />
  </div>
)

