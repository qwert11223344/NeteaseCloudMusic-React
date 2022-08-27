import styles from './index.module.scss';
import propTypes from 'prop-types';
export default function CommonHeaderRcm({
  title,
  left,
  keywords,
  showIcon,
  right,
  clickKeywords,
  clickRight
}) {
  return (
    <div
      className={styles.commonHeaderRcm}
      style={{ paddingLeft: showIcon ? 34 : 0 }}
    >
      {showIcon && <div className='doct-icon'></div>}
      <div className='common-header-left'>
        <h2 className='hot-title'>
          <a href='/discover/recommend' className='no-link hot-text'>
            {title}
          </a>
        </h2>
        <span> {left}</span>
        <ul className='keywords'>
          {keywords.map(item => {
            return (
              <li className='item' key={item}>
                <a
                  href='/'
                  onClick={e => {
                    e.preventDefault();
                    clickKeywords(item);
                  }}
                >
                  {item}
                </a>
                <span className='line'>|</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='common-header-right'>
        <span onClick={clickRight}>{right}</span>
        {showIcon && <i className='icon'></i>}
      </div>
    </div>
  );
}

CommonHeaderRcm.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  showIcon: propTypes.bool,
  clickKeywords: propTypes.func,
  clickRight: propTypes.func
};
CommonHeaderRcm.defaultProps = {
  title: '',
  keywords: [],
  showIcon: true,
  right: '更多'
};
