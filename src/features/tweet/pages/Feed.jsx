import {useState} from 'react';
import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, HeaderAvator} from '@/components/common';
import {AppPage} from '@/components/layout/AppPage';
import {Box} from '@/components/atoms';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import {getUser} from '@/utils/auth';
import {getTweets} from '../api';

export const Feed = () => {
  const limit = 20;
  const user = getUser();
  const [tweets, setTweets] = useState([]);
  const [scrollRef, _, setPaged, isLoading, setIsLoading] = useInfinityScroll(async currentPage => {
    try {
      if (isLoading) return;

      setIsLoading(true);

      const params = {
        limit,
        paged: currentPage,
      };
      const response = await getTweets(params);

      if (response.data.length < limit) setPaged(0);

      const newItems = currentPage === 1 ? response.data : [...tweets, ...response.data];
      setTweets(newItems);
    } catch (e) {
      console.error(e);
      alert('ツイートを読み込めませんでした');
    } finally {
      setIsLoading(false);
    }
  });

  const headerOption = {
    headerLeft: <HeaderAvator user={user} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };

  return (
    <AppPage headerOption={headerOption}>
      <Box css={content}>
        {tweets.map((data, index) => (
          <TweetItem item={data} key={index} />
        ))}
        <div ref={scrollRef} />
        <AddTweetButton />
      </Box>
    </AppPage>
  );
};

const content = css`
  margin-top: 24px;
`;
