import { formatDate } from '@/utils';
import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, message, Tooltip } from 'antd';
import { createElement, useState } from 'react';
import styles from './index.module.scss';
export default function CommentContent({ title, comments }) {
  const LikeBth = item => {
    const [action, setAction] = useState(null);
    return [
      <>
        <Tooltip visible={false} key='comment-basic-like' title='Like'>
          <span>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className='comment-action'>({item.likedCount ?? 0})</span>
          </span>
        </Tooltip>
        <span onClick={() => message.info('以后会有的')}>回复</span>
      </>
    ];
  };
  return (
    <div className={styles.commentContent}>
      <div className='header-comment'>{title}</div>
      {comments &&
        comments.map(i => (
          <Comment
            key={i.commentId}
            author={
              <a
                className='author-name'
                href={`/#/user/home?id=${i.user.userId}`}
              >
                {i.user.nickname}
              </a>
            }
            avatar={
              <Avatar
                shape='square'
                size='large'
                src={i.user.avatarUrl}
                alt={i.user.nickname}
              />
            }
            content={<p>{i.content}</p>}
            datetime={i.timeStr ?? formatDate(i.time, 'MM月dd日 hh:mm')}
            actions={LikeBth(i)}
            children={
              i.beReplied.length ? (
                <Comment
                  author={
                    <a
                      className='author-name'
                      href={`/#/user/home?id=${i.beReplied[0].user.userId}`}
                    >
                      {i.beReplied[0].user.nickname}
                    </a>
                  }
                  avatar={
                    <Avatar
                      shape='square'
                      size='large'
                      src={i.beReplied[0].user.avatarUrl}
                      alt={i.beReplied[0].user.nickname}
                    />
                  }
                  content={<p>{i.beReplied[0].content}</p>}
                  datetime={
                    i.beReplied[0].timeStr ??
                    formatDate(i.beReplied[0].time, 'MM月dd日 hh:mm')
                  }
                ></Comment>
              ) : null
            }
          ></Comment>
        ))}
    </div>
  );
}
