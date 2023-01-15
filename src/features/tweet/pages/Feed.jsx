import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/components/parts';
import {Box} from '@/components/atoms';
import Mock from '@/features/users/mock';
import {getTweets, tweetAction} from '../api';

export const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };

  const handleActionError = type => {
    const action = type === 'like' ? 'いいね' : type === 'retweet' ? 'リツイート' : 'コメント';
    alert(`${action}の投稿に失敗しました`);
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

  const handleStatusIconClick = async (tweetId, type) => {
    try {
      const response = await tweetAction(tweetId, type);
      setTweets(response.data);
    } catch (e) {
      console.error(e);
      handleActionError(type);
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
