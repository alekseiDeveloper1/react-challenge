import styles from './Spinner.module.css';

export const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
);
