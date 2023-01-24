import {Outlet} from 'react-router-dom';
import {AuthDialog} from '@/components/auth/AuthDialog';
import {checkLogin} from '@/utils/auth';

export const AuthRouteGuard = () => {
  const isLogin = checkLogin();

  return <>{!isLogin ? <AuthDialog isShow /> : <Outlet />}</>;
};
