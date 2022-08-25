import { renderRoutes } from 'react-router-config';
import styles from './index.module.scss';
export default function User({ route }) {
  return <div className={styles.user}>{renderRoutes(route.routes)}</div>;
}
