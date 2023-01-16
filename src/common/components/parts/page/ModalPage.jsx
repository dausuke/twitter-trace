import {css} from '@emotion/react';
import {Box, Page} from '../../atoms';
import {PageHeader} from '../header/PageHeader';

export const ModalPage = ({children, headerOption}) => (
  <Page>
    <PageHeader {...headerOption} />
    <Box css={content}>{children}</Box>
  </Page>
);

const content = css`
  padding-bottom: 50px;
`;
