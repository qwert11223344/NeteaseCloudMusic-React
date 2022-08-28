import { notification } from 'antd';
import { useEffect } from 'react';

export default function WNNotification({
  type = 'warning',
  message = '注意',
  description = '',
  duration = 4.5
}) {
  useEffect(() => {
    notification[type]({
      message,
      description,
      duration
    });
  }, [description, message, type, duration]);
  return null;
}
