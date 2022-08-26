import artistApi from '@/api/artistApi';
import { formateParagraph } from '@/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
export default function ArtistDesc() {
  const [artistDesc, setArtistDesc] = useState({});
  const location = useLocation();
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetArtistDesc = async id => {
      const { introduction, briefDesc } = await artistApi.getArtistDesc(id);
      setArtistDesc({ introduction, briefDesc });
    };
    asyncGetArtistDesc(id);
  }, [location]);

  return (
    <div className={styles.artistDesc}>
      {artistDesc.briefDesc && (
        <div className='briefDesc'>
          <p className='title'>个人简介</p>
          <div className='desc-content'>
            {formateParagraph(artistDesc.briefDesc).map(ti => (
              <p key={ti}>{ti}</p>
            ))}
          </div>
        </div>
      )}
      {artistDesc.introduction &&
        artistDesc.introduction.map(i => (
          <div key={i.ti}>
            <p className='title'>{i.ti}</p>
            <div className='desc-content'>
              {formateParagraph(i.txt).map(ti => (
                <p key={ti}>{ti}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
