import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/common/components/parts';
import {Box} from '@/common/components/atoms';
import Mock from '@/features/users/mock';
import {getTweets} from '../api';

export const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };

  const onFetchTweets = async () => {
    try {
      const response = await getTweets();
      setTweets(response.data);
    } catch (e) {
      console.error(e);
      alert('ツイートを読み込めませんでした');
    }
  };

  useEffect(() => {
    onFetchTweets();
  }, []);

  useEffect(() => {
    if (!!tweets.length) {
      const container = document.getElementById('feedContainer');
      container.scrollIntoView(false);
    }
  }, [tweets]);

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content} id="feedContainer">
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
