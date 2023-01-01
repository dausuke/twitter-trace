import {css} from '@emotion/react';
import {Tweet, AddTweetButton} from '../components';
import {NaviInPage, Avator} from '@/components/parts';
import {HeaderButton, Box} from '@/components/atoms';
import mock from '../mock';
import Avator_A from '@/features/tweets/mock/images/A.png';

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
          <Tweet data={data} key={index} />
        ))}
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  margin-top: 24px;
`;
