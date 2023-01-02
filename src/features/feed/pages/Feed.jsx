import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/components/parts';
import {Box} from '@/components/atoms';
import mock from '../mock';
import Mock from '@/features/users/mock';

export const Feed = () => {
  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content}>
        {mock.map((data, index) => (
          <TweetItem item={data} key={index} />
        ))}
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  margin-top: 24px;
`;
