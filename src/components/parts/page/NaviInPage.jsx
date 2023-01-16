import {css} from '@emotion/react';
import {Box, Page} from '../../atoms';
import {PageHeader} from '../header/PageHeader';
import {BottomNavi} from '../navi/BottomNavi';

export const NaviInPage = ({children, headerOption, bottomOption}) => (
  <Page>
    <PageHeader {...headerOption} />
    <Box css={content}>{children}</Box>
    <BottomNavi {...bottomOption} />
  </Page>
);

const content = css`
  padding-bottom: 50px;
`;
