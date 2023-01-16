import {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import {SearchInput} from '../components/SearchInput';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/common/components/parts';
import {Box} from '@/common/components/atoms';
import Mock from '@/features/users/mock';
import {getTweets} from '../api/getTweets';

export const Search = () => {
  const [tweets, setTweets] = useState([]);
  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    content: <SearchInput />,
  };

  const onFetchTweets = async () => {
    try {
      const response = await getTweets();
      setTweets(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    onFetchTweets();
  }, []);

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content}>
        {tweets.map((data, index) => (
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
