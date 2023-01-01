import {css} from '@emotion/react';
import {Box, Page} from '../atoms';
import {PageHeader} from './PageHeader';
import {BottomNavi} from './navi/BottomNavi';

export const NaviInPage = ({children, headerOption}) => (
  <Page>
    <PageHeader
      headerLeft={headerOption.headerLeft}
      headerRight={headerOption.headerRight}
      {...headerOption}
    />
    <Box css={content}>{children}</Box>
    <BottomNavi />
  </Page>
);

const content = css`
  padding: 56px 0 60px;
`;
