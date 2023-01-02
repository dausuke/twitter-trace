import {css} from '@emotion/react';
import {SearchInput} from '../components/SearchInput';
import mock from '@/features/feed/mock';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/components/parts';
import {Box} from '@/components/atoms';
import Mock from '@/features/users/mock';

export const Search = () => {
  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    content: <SearchInput />,
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
