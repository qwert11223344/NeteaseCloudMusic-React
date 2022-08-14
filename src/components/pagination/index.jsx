import { Pagination } from 'antd';
import styles from './index.module.scss';
export default function WNPagination({
  current,
  total,
  onPageChange,
  pageSize
}) {
  const itemRender = (page, type, originalElement) => {
    if (type === 'prev') {
      return <button className='control prev'> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className='control next'> 下一页 &gt;</button>;
    }
    return originalElement;
  };
  return (
    <div className={styles.WNPagination}>
      <Pagination
        className='pagination'
        size='small'
        current={current}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </div>
  );
}
