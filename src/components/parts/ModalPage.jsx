import {css} from '@emotion/react';
import {Box, Page} from '../atoms';
import {PageHeader} from './PageHeader';

export const ModalPage = ({children, headerOption}) => (
  <Page>
    <PageHeader {...headerOption} />
    <Box css={content}>{children}</Box>
  </Page>
);

const content = css`
  padding: 56px 0 50px;
`;
