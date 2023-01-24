import {css} from '@emotion/react';
import {AddTweetButton, NaviInPage, HeaderAvator} from '@/components/parts';
import {HeaderButton, Box, Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';
import mock from '../mock';
import {NoticeItem} from '../components/NoticeItem';
import {getUser} from '@/utils/auth';

export const Notification = () => {
  const user = getUser();

  const headerOption = {
    headerLeft: <HeaderAvator user={user} />,
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
  min-height: 100vh;
  margin-top: 24px;
`;