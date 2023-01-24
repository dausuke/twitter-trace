import {css} from '@emotion/react';
import {Box} from '@/components/atoms';

export const Feed = () => {
  return (
    <Box css={content}>
      <p>Feed Page</p>
    </Box>
  );
};

const content = css`
  margin-top: 24px;
`;
