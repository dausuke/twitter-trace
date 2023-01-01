import {css} from '@emotion/react';
import {NaviInPage, Avator} from '@/components/parts';
import {HeaderButton, Box} from '@/components/atoms';
import {AddTweetButton} from '@/features/tweets/components';
import {Avator_A} from '@/features/mock/avators';
import mock from '../mock';
import {NoticeItem} from '../components/NoticeItem';

export const Notification = () => {
  const headerOption = {
    headerLeft: (
      <HeaderButton>
        <Avator image={Avator_A} size={30} />
      </HeaderButton>
    ),
    title: '通知',
    titleStyle: {
      textAlign: 'center',
    },
  };

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content}>
        {mock.map((data, index) => (
          <NoticeItem item={data} key={index} />
        ))}
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  margin-top: 24px;
`;
