import {css} from '@emotion/react';
import {Text, Box} from '@/components/atoms';

export const Feed = () => {
  return (
    <Box css={content}>
      <Text fontSize={24} fontWeight={700} textAlign="center">
        Feed Page
      </Text>
    </Box>
  );
};

const content = css`
  margin-top: 24px;
`;
