import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {Feed} from '@/features/feed/pages/Feed';
import {PostTweet} from '@/features/post/pages/PostTweet';
import {Search} from '@/features/search/pages/Search';
import {Notification} from '@/features/notification/pages/Notification';
import {User} from '@/features/users/page/User';

const createRoutes = element => createBrowserRouter(createRoutesFromElements(element));

const routes = createRoutes(
  <Route path="/" errorElement={<div>error</div>}>
    <Route index element={<Feed />} />
    <Route path="search" element={<Search />} />
    <Route path="notification" element={<Notification />} />
    <Route path="user/:accountName" element={<User />} />
    <Route path="post/tweet" element={<PostTweet />} />
  </Route>,
);

const Router = () => <RouterProvider router={routes} />;

export default Router;
