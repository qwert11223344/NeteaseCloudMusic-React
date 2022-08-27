import { setIsShowLogin } from '@/store/action/login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function Auth(props) {
  const disPatch = useDispatch();
  const { isLogin } = useSelector(state => state.loginReducer);
  useEffect(() => {
    !isLogin && disPatch(setIsShowLogin(true));
  }, [disPatch, isLogin]);
  return (
    <Route {...props}>
      {isLogin ? (
        props.children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location.pathname
            }
          }}
        ></Redirect>
      )}
    </Route>
  );
}
