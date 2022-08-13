import styles from './index.module.scss';
import { discoverNav } from '@/common/localData';
import { NavLink } from 'react-router-dom';
export default function DiscoverNav() {
  return (
    <div className={styles.nav}>
      <ul className='category-list w1100'>
        {discoverNav.map(i => (
          <li key={i.title} className='item'>
            <NavLink to={i.link} activeClassName='menu-active'>
              {i.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
