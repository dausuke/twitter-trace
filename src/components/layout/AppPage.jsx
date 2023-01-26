import {css} from '@emotion/react';
import {Box, Page} from '../atoms';
import {PageHeader} from '../common/header/PageHeader';

export const AppPage = ({children, headerOption}) => (
  <Page>
    <Box css={content}>{children}</Box>
  </Page>
);

const content = css`
  flex: 1;
  padding-bottom: 50px;
`;
