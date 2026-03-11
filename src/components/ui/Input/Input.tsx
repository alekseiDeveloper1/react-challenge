import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

type InputProps = {
  label?: string;
  error?: string;
  icon?: string;
  wrapperClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  icon,
  id,
  className,
  wrapperClassName,
  ...rest
}: InputProps) => {
  const wrapperClasses = cn(
    styles.inputWrapper,
    { [styles.inputWrapperError]: error },
    wrapperClassName,
  );

  const inputClasses = cn(styles.input, className);

  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={wrapperClasses}>
        {icon && (
          <img
            src={icon}
            className={styles.icon}
            aria-hidden="true"
            alt="icon"
          />
        )}
        <input id={id} className={inputClasses} {...rest} />
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
