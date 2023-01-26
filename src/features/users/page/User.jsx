import {css} from '@emotion/react';
import {useParams, useNavigate} from 'react-router';
import {HeaderButton, Box, Icon, Button, Avator, Text, Pressable} from '@/components/atoms';
import {AddTweetButton, TweetItem} from '@/components/common';
import {AppPage} from '@/components/layout/AppPage';
import {Colors} from '@/assets/styles';
import {getUser} from '@/utils/auth';

export const User = () => {
  const user = getUser();
  const navigate = useNavigate();
  const {accountName} = useParams();
  const isMe = user.account_name === accountName;

  const headerOption = {
    headerLeft: (
      <HeaderButton onClick={() => navigate(-1)}>
        <Icon.BackIcon color={Colors.Icon.Black} />
      </HeaderButton>
    ),
    title: user.name,
    text: `ツイート${user.tweets.length}`,
  };

  const backgroundImage = css`
    background-image: url(${user.profile_background});
  `;

  const onFollowClick = number => {
    navigate(`follow?selectIndex=${number}`);
  };

  return (
    <AppPage headerOption={headerOption}>
      <Box>
        <Box css={header}>
          <Box css={backgroundImage} justifyContent="center" alignItems="center">
            <img css={{width: '100%', height: '130px'}} src={user.profile_background} alt="" />
          </Box>
          <Box row css={headerContent} justifyContent="space-between" alignItems="center">
            <Avator image={user.avator} />
            <Button outline>{isMe ? '編集' : 'フォロー'}</Button>
          </Box>
        </Box>
        <Box css={userInfo}>
          <Box css={nameWrap}>
            <Text fontSize={16} fontWeight={700}>
              {user.user_name}
            </Text>
            <Text color={Colors.Text.Seconday}>{user.account_name}</Text>
          </Box>
          <Box row css={followInfo}>
            <Pressable onClick={() => onFollowClick(0)} hitSlop={4}>
              <Box row css={followWrap} alignItems="center">
                <Text fontSize={14} fontWeight={700}>
                  {user.follow_count}
                </Text>
                <Text fontSize={12} color={Colors.Text.Seconday}>
                  フォロー
                </Text>
              </Box>
            </Pressable>
            <Pressable onClick={() => onFollowClick(1)} hitSlop={4}>
              <Box row css={followWrap} alignItems="center">
                <Text fontSize={14} fontWeight={700}>
                  {user.follwer_count}
                </Text>
                <Text fontSize={12} color={Colors.Text.Seconday}>
                  フォロワー
                </Text>
              </Box>
            </Pressable>
          </Box>
        </Box>
        <Box>
          {user.tweets.map((tweet, index) => (
            <TweetItem key={index} item={tweet} />
          ))}
        </Box>
      </Box>
      <AddTweetButton />
    </AppPage>
  );
};

const header = css`
  position: relative;
  padding-bottom: 45px;
`;

const headerContent = css`
  padding: 0 16px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const userInfo = css`
  padding: 16px;
  gap: 16px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const nameWrap = css`
  gap: 4px;
`;

const followInfo = css`
  gap: 18px;
`;

const followWrap = css`
  gap: 2px;
`;
