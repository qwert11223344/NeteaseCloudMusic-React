import DiscoverNav from '@/components/navbar';
import { renderRoutes } from 'react-router-config';
import styles from './index.module.scss';
export default function Discover({ route }) {
  return (
    <div className={styles.discover}>
      <DiscoverNav />
      {renderRoutes(route.routes)}
    </div>
  );
}
