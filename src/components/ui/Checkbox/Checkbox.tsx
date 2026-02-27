import type { InputHTMLAttributes, ReactNode } from 'react'
import styles from './Checkbox.module.css'

type CheckboxProps = {
  label?: ReactNode
  className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Checkbox = ({ id, label, className, ...rest }: CheckboxProps) => {
  const rootClassName = className
    ? `${styles.checkbox} ${className}`
    : styles.checkbox

  return (
    <label className={rootClassName} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className={styles.checkbox__control}
        {...rest}
      />
      {label && <span className={styles.checkbox__label}>{label}</span>}
    </label>
  )
}

