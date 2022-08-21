import './index.scss';
import { scrollTo } from '@/utils';
import { useEffect } from 'react';
import { useRef } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
export default function Lyric() {
  const { lyric, currentLyricIndex } = useSelector(
    state => state.playBarReducer,
    shallowEqual
  );
  const lyricRef = useRef('');
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 4) return;
    scrollTo(lyricRef.current, (currentLyricIndex - 4) * 32, 300);
  }, [currentLyricIndex]);
  return (
    <div ref={lyricRef} className='lyric-container'>
      <div className='lyric-content'>
        {lyric.length
          ? lyric.map((i, index) => (
              <div
                className={`lyric-item ${
                  currentLyricIndex === index ? 'active' : ''
                }`}
                key={index}
              >
                {i.content}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
