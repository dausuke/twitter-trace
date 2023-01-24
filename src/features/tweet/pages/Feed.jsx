import {useState} from 'react';
import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, NaviInPage, HeaderAvator} from '@/components/parts';
import {Box} from '@/components/atoms';
import Mock from '@/features/users/mock';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import {getTweets} from '../api';

export const Feed = () => {
  const limit = 20;
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
    headerLeft: <HeaderAvator user={Mock.me} />,
    title: 'ホーム',
    titleStyle: {
      textAlign: 'center',
    },
  };

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content}>
        {tweets.map((data, index) => (
          <TweetItem item={data} key={index} />
        ))}
        <div ref={scrollRef} />
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  margin-top: 24px;
`;
