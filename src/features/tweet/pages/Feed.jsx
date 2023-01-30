import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box} from '@/components/atoms';
import axios from '@/libs/axios';
import {TweetItem} from '@/components/common';

export const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get('/tweet');
      setTweets(response.data);
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <Box css={content}>
      {tweets.map(tweet => (
        <TweetItem item={tweet} key={tweet.id} />
      ))}
    </Box>
  );
};

const content = css`
  margin-top: 24px;
`;
