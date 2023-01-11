import {useEffect, useState} from 'react';
import {css} from '@emotion/react';
import {SearchInput} from '../components/SearchInput';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/components/parts';
import {Box} from '@/components/atoms';
import Mock from '@/features/users/mock';
import {getTweet} from '../api/getTweet';

export const Search = () => {
  const [tweets, setTweets] = useState([]);
  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    content: <SearchInput />,
  };

  const fetchTweets = async () => {
    try {
      const response = await getTweet();
      setTweets(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTweets();
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
