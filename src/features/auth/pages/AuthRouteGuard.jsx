import {Outlet} from 'react-router-dom';
import {AuthDialog} from '@/common/components/auth/AuthDialog';

export const AuthRouteGuard = () => {
  const token = localStorage.getItem('token');

  return <>{!token ? <AuthDialog isShow /> : <Outlet />}</>;
};
