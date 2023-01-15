import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/components/parts';
import {Box} from '@/components/atoms';
import Mock from '@/features/users/mock';
import {getTweet, likeTweet} from '../api';

export const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };

  const fetchTweets = async () => {
    try {
      const response = await getTweet();
      setTweets(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleStatusIconClick = async (tweetId, type) => {
    const request = type === 'like' ? likeTweet : null;
    try {
      const response = await request(tweetId);
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
          <TweetItem item={data} key={index} onStatusIconClick={handleStatusIconClick} />
        ))}
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  margin-top: 24px;
`;
