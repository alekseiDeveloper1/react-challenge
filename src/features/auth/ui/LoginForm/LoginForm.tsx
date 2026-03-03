import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button/Button';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { loginFormSchema, type LoginFormValues } from '@/types/auth';
import { Input } from '@/components/ui/Input/Input';
import cls from './LoginForm.module.css';
import authLogo from '@/assets/auth-logo.svg';
import lock from '@/assets/icons/lock-icon.svg';
import user from '@/assets/icons/user-icon.svg';
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      remember: false,
    },
  });

  const { mutate: login, isPending, error } = useAuth();
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login(data);
  };

  return (
    <div
      className={cls.card}
      role="dialog"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDesc"
    >
      <div className={cls.logo}>
        <img src={authLogo} alt="authorization logo" />
      </div>
      <h1 id="dialogTitle" className={cls.title}>
        Добро пожаловать!
      </h1>
      <p id="dialogDesc" className={cls.subtitle}>
        Пожалуйста, авторизируйтесь
      </p>

      <form className={cls.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={cls.field}>
          <Input
            id="username"
            type="text"
            label="Логин"
            placeholder="test"
            icon={user}
            error={errors.username?.message}
            {...register('username')}
          />
        </div>

        <div className={cls.field}>
          <Input
            id="password"
            type="password"
            label="Пароль"
            icon={lock}
            error={errors.password?.message}
            {...register('password')}
          />
        </div>

        <div className={cls.extras}>
          <Checkbox
            id="remember"
            label="Запомнить данные"
            {...register('remember')}
          />
        </div>

        {error && (
          <p className={cls.error} role="alert">
            Неверный логин или пароль.
          </p>
        )}
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Вход...' : 'Войти'}
        </Button>

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
  );
};
