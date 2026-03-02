import styles from './Error.module.css';

interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => (
  <div className={styles.errorContainer} role="alert">
    <strong className={styles.errorTitle}>Error!</strong>
    <span className={styles.errorMessage}> {message}</span>
  </div>
);
