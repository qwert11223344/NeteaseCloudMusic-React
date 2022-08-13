import styles from './index.module.scss';
import propTypes from 'prop-types';
export default function RecommendHeader({ title }) {
  return (
    <div className={styles.recommendHeader}>
      <div className='recommend-header-left'>
        <h2 className='hot-title'>
          <a href='/discover/recommend' className='no-link hot-text'>
            {title}
          </a>
        </h2>
      </div>
    </div>
  );
}
RecommendHeader.propTypes = {
  title: propTypes.string.isRequired
};
