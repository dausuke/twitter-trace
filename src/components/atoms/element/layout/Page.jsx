import {css} from '@emotion/react';
import {Box} from '@/components/atoms';
import {Colors} from '@/assets/styles';

export const Page = ({children}) => <Box css={container}>{children}</Box>;

const container = css`
  padding-bottom: 24px;
  background-color: ${Colors.Background.Primary};
`;
