import styles from './index.module.scss';
export default function HeaderLine({ title, right }) {
  return (
    <div className={styles.headerLine}>
      <div className='hot-artist'>{title}</div>
      <div className='link show-all'>{right}</div>
    </div>
  );
}
