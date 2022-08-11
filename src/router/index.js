import { Redirect } from 'react-router';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />
  }
];
export default routes;
