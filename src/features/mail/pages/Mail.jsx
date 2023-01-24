import {css} from '@emotion/react';
import {AddTweetButton, NaviInPage, HeaderAvator} from '@/components/parts';
import {HeaderButton, Box, Text, Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';
import {getUser} from '@/utils/auth';

export const Mail = () => {
  const user = getUser();

  const headerOption = {
    headerLeft: <HeaderAvator user={user} />,
    headerRight: (
      <HeaderButton>
        <Icon.SettingIcon color={Colors.Icon.Black} />
      </HeaderButton>
    ),
    title: 'メッセージ',
    titleStyle: {
      textAlign: 'center',
    },
  };

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content}>
        <Text fontSize={24} fontWeight={700} textAlign="center">
          mail page
        </Text>
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  min-height: 100vh;
  margin-top: 24px;
  padding: 0 16px;
`;
