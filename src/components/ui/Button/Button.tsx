import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, type = 'button', ...rest }: ButtonProps) => {
  const combinedClassName = className
    ? `${styles.button} ${className}`
    : styles.button

  return (
    <button type={type} className={combinedClassName} {...rest}>
      {children}
    </button>
  )
}

