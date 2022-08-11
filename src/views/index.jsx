import { Skeleton } from 'antd';
import { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
export default function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
    </>
  );
}
