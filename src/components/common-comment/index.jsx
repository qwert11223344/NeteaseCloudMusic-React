import { Avatar, Button, Comment, Form, Input } from 'antd';
import { useState } from 'react';
export default function CommonComment({ onFocus, avatar = '' }) {
  const { TextArea } = Input;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const Editor = ({ submitting, onFocus }) => {
    const [textVal, setTextVal] = useState('');
    const inputChange = e => {
      setTextVal(e.target.value.trim());
    };
    const onSubmit = () => {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log(textVal);
        setTextVal('');
        setIsSubmitting(false);
      }, 1000);
    };
    return (
      <>
        <Form.Item>
          <TextArea
            rows={4}
            maxLength={140}
            showCount={true}
            value={textVal}
            onFocus={onFocus}
            onChange={inputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            loading={isSubmitting}
            onClick={onSubmit}
            type='primary'
          >
            评论
          </Button>
        </Form.Item>
      </>
    );
  };
  return (
    <div>
      <Comment
        avatar={<Avatar src={avatar} alt='Han Solo' />}
        content={<Editor submitting={isSubmitting} onFocus={onFocus} />}
      />
    </div>
  );
}
