import {css} from '@emotion/react';
import {AddTweetButton, NaviInPage} from '@/components/parts';
import {HeaderButton, Box, Icon, Avator} from '@/components/atoms';
import {Avator_A} from '@/features/mock/avators';
import {Colors} from '@/assets/styles';
import mock from '../mock';
import {NoticeItem} from '../components/NoticeItem';

export const Notification = () => {
  const headerOption = {
    headerLeft: (
      <HeaderButton>
        <Avator image={Avator_A} size={30} />
      </HeaderButton>
    ),
    headerRight: (
      <HeaderButton>
        <Icon.SettingIcon color={Colors.Icon.Black} />
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
