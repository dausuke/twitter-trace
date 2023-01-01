import {css} from '@emotion/react';
import {Box} from '@/components/atoms';
import {PageHeader} from '../../../parts/PageHeader';
import {Colors} from '@/assets/styles';

export const Page = ({children, headerOption}) => (
  <Box css={container}>
    <PageHeader {...headerOption} />
    {children}
  </Box>
);

const container = css`
  padding: 24px 0;
  background-color: ${Colors.Background.Primary};
`;
