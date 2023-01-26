import {css} from '@emotion/react';
import {Box, Page} from '../../atoms';
import {PageHeader} from '../header/PageHeader';
import {BottomNavi} from '../navi/BottomNavi';

export const NaviInPage = ({children, headerOption}) => (
  <Page>
    <PageHeader {...headerOption} />
    <Box css={content}>{children}</Box>
    <BottomNavi />
  </Page>
);

const content = css`
  flex: 1;
  padding-bottom: 50px;
`;
