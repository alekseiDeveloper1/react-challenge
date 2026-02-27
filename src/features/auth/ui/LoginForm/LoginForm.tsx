import { useState } from 'react'
import { Button } from '@/components/ui/Button/Button'
import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import { Input } from '@/components/ui/Input/Input'
import cls from './LoginForm.module.css'
import authLogo from '@/assets/auth-logo.svg'
import lock from '@/assets/icons/lock-icon.svg'
import user from '@/assets/icons/user-icon.svg'
export const LoginForm = () => {
  const [userNeme, setUserName] = useState('test')
  const [password, setPassword] = useState('password123')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={cls.card}>
      <div className={cls.logo}>
        <img src={authLogo}  alt="authorization logo" />
      </div>
      <h1 className={cls.title}>Добро пожаловать!</h1>
      <p className={cls.subtitle}>
        Пожалуйста, авторизируйтесь
      </p>

      <form className={cls.form} onSubmit={handleSubmit}>
        <div className={cls.field}>
          <Input
            id="user"
            type="string"
            label="Логин"
            placeholder="test"
            icon={user}
            value={userNeme}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>

        <div className={cls.field}>
          <Input
            id="password"
            type="password"
            label="Пароль"
            icon={lock}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className={cls.extras}>
          <Checkbox
            id="remember"
            label="Запомнить данные"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
        </div>

        <Button type="submit">Войти</Button>

        <div className={cls.divider}>
          <span className={cls.line} />
          <span className={cls.label}>или</span>
          <span className={cls.line} />
        </div>

        <div className={cls.footer}>
          Нет аккаунта?{' '}
          <a href="#" className={cls.link}>
            Создать
          </a>
        </div>
      </form>
    </div>
  )
}

