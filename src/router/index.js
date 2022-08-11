import { Redirect } from 'react-router';
import React from 'react';
const Discover = React.lazy(() => import('@/views/discover'));
const Friend = React.lazy(() => import('@/views/friend'));
const Mine = React.lazy(() => import('@/views/mine'));
const Error = React.lazy(() => import('@/views/error'));
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    component: Error
  }
];
export default routes;
