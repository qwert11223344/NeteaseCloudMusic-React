import { artistCategories } from '@/common/localData';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
export default function DiscoverArtistLeft({
  setCurrentPage,
  setArea,
  setType,
  area,
  type
}) {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className={styles.discoverArtistLeft}>
      {artistCategories &&
        artistCategories.map(i => (
          <div key={i.id} className='left-item'>
            <h3 className='artist-title'>{i.title}</h3>
            {i.artists.map(ai => (
              <a
                className={`artist-item ${
                  location.pathname + location.search === ai.url ? 'active' : ''
                }`}
                key={ai.name}
                href={ai.url}
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  setCurrentPage(1);
                  i.area !== area && setArea(i.area);
                  ai.type !== type && setType(ai.type);
                  history.push(ai.url);
                }}
              >
                {ai.name}
              </a>
            ))}
          </div>
        ))}
    </div>
  );
}
