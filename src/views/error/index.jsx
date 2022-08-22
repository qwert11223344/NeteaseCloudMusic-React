import styles from './index.module.scss';

export default function Error() {
  return (
    <div className={styles.notFound}>
      <div className='not-found-content w980'>
        <div className='show-404-img'></div>
        <p className='show-404-text'>很抱歉，你要查找的网页找不到</p>
      </div>
    </div>
  );
}
