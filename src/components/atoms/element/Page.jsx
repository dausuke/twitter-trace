import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';
import Box from './Box';

export const Page = ({children}) => <Box css={container}>{children}</Box>;

const container = css`
  background-color: ${Colors.Background.Primary};
`;
