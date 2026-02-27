import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'
type InputProps = {
  label?: string
  error?: string
  icon?: string
  wrapperClassName?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  label,
  error,
  icon,
  id,
  className,
  wrapperClassName,
  ...rest
}: InputProps) => {
  const wrapperClasses = [
    styles['input-wrapper'],
    error ? styles['input-wrapper_error'] : '',
    wrapperClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const inputClasses = className
    ? `${styles.input} ${className}`
    : styles.input

  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={wrapperClasses}>
        {icon && (
          <img src={icon} className={styles.icon} aria-hidden="true" />
        )}
        <input  id={id} className={inputClasses} {...rest} />
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

