import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type ButtonVariant = 'primary' | 'transparent' | 'small' | 'small-transparent';

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  icon?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  icon,
  variant = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  const combinedClassName = cn(
    styles.button,
    {
      [styles.buttonTransparent]: variant === 'transparent',
      [styles.buttonSmall]: variant === 'small',
      [styles.buttonSmallTransparent]: variant === 'small-transparent',
      [styles.buttonIcon]: icon,
    },
    className,
  );
  return (
    <button type={type} className={combinedClassName} {...rest}>
      {icon && (
        <img src={icon} className={styles.icon} alt="icon" aria-hidden />
      )}
      {children}
    </button>
  );
};
