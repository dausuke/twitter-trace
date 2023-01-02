import {css} from '@emotion/react';
import {AddTweetButton, TweetItem, NaviInPage} from '@/components/parts';
import {HeaderButton, Box, Avator} from '@/components/atoms';
import mock from '../mock';
import {Avator_A} from '@/features/mock/avators';

export const Feed = () => {
  const headerOption = {
    headerLeft: (
      <HeaderButton>
        <Avator image={Avator_A} size={30} />
      </HeaderButton>
    ),
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
