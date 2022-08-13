import styles from './index.module.scss';
export default function HeaderLine({ title, right }) {
  return (
    <div className={styles.headerLine}>
      <div className='hot-artist'>{title}</div>
      <a href='/discover/recommend' className='no-link show-all'>
        {right}
      </a>
    </div>
  );
}
