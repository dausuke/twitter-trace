import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {Feed, Search} from '@/features/tweet/pages';
import {PostTweet} from '@/features/post/pages';
import {Notification} from '@/features/notification/pages';
import {User, Follow} from '@/features/users/page';
import {Auth} from '@/features/auth/pages';
import {AuthRouteGuard} from '@/features/auth/pages/AuthRouteGuard';

const createRoutes = element => createBrowserRouter(createRoutesFromElements(element));

const routes = createRoutes(
  <Route path="/" errorElement={<div>error</div>}>
    <Route index element={<Feed />} />
    <Route element={<AuthRouteGuard />}>
      <Route path="search" element={<Search />} />
      <Route path="notification" element={<Notification />} />
      <Route path="user/:accountName" element={<User />} />
      <Route path="user/:accountName/follow" element={<Follow />} />
      <Route path="post/tweet" element={<PostTweet />} />
    </Route>
    <Route path="register" element={<Auth />} />
  </Route>,
);

const Router = () => <RouterProvider router={routes} />;

export default Router;
