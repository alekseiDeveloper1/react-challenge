import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'transparent'

type ButtonProps = {
  children?: ReactNode
  className?: string
  icon?: string
  variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  className,
  icon,
  variant = 'primary',
  type = 'button',
  ...rest
}: ButtonProps) => {
  const combinedClassName = [
    styles.button,
    variant === 'transparent' && styles.button_transparent,
    icon && styles.button_icon,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={combinedClassName} {...rest}>
      {icon && <img src={icon} className={styles.icon} alt="icon" aria-hidden />}
      {children}
    </button>
  )
}

