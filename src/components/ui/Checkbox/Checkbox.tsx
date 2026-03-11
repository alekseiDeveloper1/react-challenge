import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Checkbox.module.css';
import cn from 'classnames';

type CheckboxProps = {
  label?: ReactNode;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox = ({ id, label, className, ...rest }: CheckboxProps) => {
  const rootClassName = cn(styles.checkbox, className);

  return (
    <label className={rootClassName} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className={styles.checkboxControl}
        {...rest}
      />
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};
