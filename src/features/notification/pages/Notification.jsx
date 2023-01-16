import {css} from '@emotion/react';
import {AddTweetButton, NaviInPage, HeaderAvator} from '@/common/components/parts';
import {HeaderButton, Box, Icon} from '@/common/components/atoms';
import {Colors} from '@/assets/styles';
import mock from '../mock';
import {NoticeItem} from '../components/NoticeItem';
import Mock from '@/features/users/mock';

export const Notification = () => {
  const headerOption = {
    headerLeft: <HeaderAvator user={Mock.me} />,
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
