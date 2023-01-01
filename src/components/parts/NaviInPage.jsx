import {Page} from '../atoms';
import {PageHeader} from './PageHeader';
import {BottomNavi} from './navi/BottomNavi';

export const NaviInPage = ({children, headerOption}) => (
  <Page>
    <PageHeader
      headerLeft={headerOption.headerLeft}
      headerRight={headerOption.headerRight}
      {...headerOption}
    />
    {children}
    <BottomNavi />
  </Page>
);
