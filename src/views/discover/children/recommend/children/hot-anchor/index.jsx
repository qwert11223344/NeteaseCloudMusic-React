import djRadioApi from '@/api/djRadioApi';
import { useEffect, useState } from 'react';
import HeaderLine from '../settle-singer/header-line';
import CoverAnchor from './cover-anchor';
import styles from './index.module.scss';
export default function HotAnchor() {
  const [hotDj, setHotDj] = useState([]);
  useEffect(() => {
    const getHotDj = async () => {
      const { djRadios } = await djRadioApi.getHotDj(5);
      setHotDj(djRadios);
    };
    getHotDj();
  }, []);
  return (
    <div className={styles.hotAnchor}>
      <HeaderLine title='热门主播' />
      <div className='anchor-container'>
        {hotDj && hotDj.map(i => <CoverAnchor key={i.id} info={i} />)}
      </div>
    </div>
  );
}
