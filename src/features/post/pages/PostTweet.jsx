import {css} from '@emotion/react';
import {Page} from '@/components/page';
import {Box} from '@/components/atoms';
import {Avator} from '@/features/users';
import Avator_A from '@/features/tweets/mock/images/A.png';

export const PostTweet = () => {
  return (
    <Page>
      <Box css={container}>
        <Avator size={48} image={Avator_A} />
      </Box>
    </Page>
  );
};

const container = css`
  padding: 24px 16px;
`;
