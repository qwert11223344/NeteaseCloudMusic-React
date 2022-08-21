import CommonComment from '@/components/common-comment';
import CommonHeaderRcm from '@/components/common-header-recommend';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { changeTotalComment } from '@/store/action/comment';
import commentApi from '@/api/commentApi';
import { setIsShowLogin } from '@/store/action/login';

import CommentContent from '@/components/comment-content/inedx';
import WNPagination from '@/components/pagination';
export default function SongComment() {
  const disPatch = useDispatch();
  const [songComment, setSongComment] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { currentSong } = useSelector(
    state => state.playBarReducer,
    shallowEqual
  );
  const { isLogin } = useSelector(state => state.loginReducer);
  const { totalComment } = useSelector(state => state.commentReducer);
  useEffect(() => {
    const getSongComment = async (
      id,
      limit = 20,
      offset = (currentPage - 1) * 20,
      before = ''
    ) => {
      const { hotComments, comments, total } = await commentApi.getSongComment(
        id,
        limit,
        offset,
        before
      );
      setSongComment({
        hotComments,
        comments
      });
      disPatch(changeTotalComment(total));
    };
    getSongComment(currentSong.id);
  }, [currentSong, disPatch, currentPage]);
  //切换页码
  const onPageChange = v => {
    setCurrentPage(v);
  };
  //文本域焦点
  const commentFocus = () => {
    if (!isLogin) disPatch(setIsShowLogin(true));
  };
  return (
    <div>
      <CommonHeaderRcm
        showIcon={false}
        right=''
        title='评论'
        left={`共有${totalComment ?? 0}条评论`}
      />
      {/* 文本域 */}
      <CommonComment onFocus={commentFocus} />
      {/* 精彩评论 */}

      {currentPage === 1 && (
        <CommentContent title='精彩评论' comments={songComment.hotComments} />
      )}
      {/* 最新评论 */}
      <CommentContent title='最新评论' comments={songComment.comments} />
      {/* 分页 */}
      <WNPagination
        current={currentPage}
        total={totalComment}
        onPageChange={onPageChange}
        pageSize={20}
      />
    </div>
  );
}
