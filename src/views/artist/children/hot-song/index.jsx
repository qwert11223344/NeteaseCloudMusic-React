import artistApi from '@/api/artistApi';
import WNPagination from '@/components/pagination';
import { formatMinuteSecond } from '@/utils';
import SongItem from '@/views/discover/children/toplist/children/song-item';
import { Button, Select, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ArtistHotSong() {
  const { Option } = Select;
  const location = useLocation();
  const [songList, setSongList] = useState([]);
  const [selectVal, setSelectVal] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const id = location.search.split('=').pop();
    const asyncGetArtistHotSong = async id => {
      const { songs } = await artistApi.getArtistHotSong(id);
      setSongList(songs);
    };
    const asyncGetArtistAllSong = async (
      id,
      offset = (currentPage - 1) * 50,
      limit = 50
    ) => {
      const { songs, total } = await artistApi.getArtistAllSong(
        id,
        offset,
        limit
      );
      setSongList(songs);
      setTotal(total);
    };
    selectVal === 'all' ? asyncGetArtistAllSong(id) : asyncGetArtistHotSong(id);
  }, [location, selectVal, currentPage]);

  const selectChange = v => {
    setSelectVal(v);
  };
  return songList.length ? (
    <>
      <Select style={{ width: 120 }} defaultValue='hot' onChange={selectChange}>
        <Option value='hot'>热门歌曲</Option>
        <Option value='all'>所有歌曲</Option>
      </Select>
      {songList.map((i, index) => (
        <SongItem
          key={i.id}
          index={index + 1}
          songId={i.id}
          songName={i.name}
          dr={formatMinuteSecond(i.dt)}
          al={i.al.name}
          i={i}
        />
      ))}
      {selectVal === 'all' && (
        <WNPagination
          total={total}
          current={currentPage}
          onPageChange={setCurrentPage}
          pageSize={50}
        />
      )}
    </>
  ) : (
    <Skeleton active />
  );
}
