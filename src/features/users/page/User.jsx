import {css} from '@emotion/react';
import {useParams, useNavigate} from 'react-router';
import {HeaderButton, Box, Icon, Button, Avator, Text} from '@/components/atoms';
import {AddTweetButton, TweetItem, NaviInPage} from '@/components/parts';
import {Colors} from '@/assets/styles';
import Mock from '../mock';

export const User = () => {
  const {me} = Mock;
  const navigate = useNavigate();
  const {accountName} = useParams();
  const isMe = me.account_name === accountName;

  const headerOption = {
    headerLeft: (
      <HeaderButton onClick={() => navigate(-1)}>
        <Icon.BackIcon color={Colors.Icon.Black} />
      </HeaderButton>
    ),
    title: me.user_name,
    text: `ツイート${me.tweets.length}`,
  };

  const backgroundImage = css`
    background-image: url(${me.profile_background});
  `;

  return (
    <NaviInPage headerOption={headerOption}>
      <Box>
        <Box css={header}>
          <Box css={backgroundImage} justifyContent="center" alignItems="center">
            <img css={{width: '100%', height: '130px'}} src={me.profile_background} alt="" />
          </Box>
          <Box row css={headerContent} justifyContent="space-between" alignItems="center">
            <Avator image={me.avator} />
            <Button outline>{isMe ? '編集' : 'フォロー'}</Button>
          </Box>
        </Box>
        <Box css={userInfo}>
          <Box css={nameWrap}>
            <Text fontSize={16} fontWeight={700}>
              {me.user_name}
            </Text>
            <Text color={Colors.Text.Seconday}>{me.account_name}</Text>
          </Box>
          <Box row css={followInfo}>
            <Box row css={followWrap} alignItems="center">
              <Text fontSize={14} fontWeight={700}>
                {me.follow_count}
              </Text>
              <Text fontSize={12} color={Colors.Text.Seconday}>
                フォロー
              </Text>
            </Box>
            <Box row css={followWrap} alignItems="center">
              <Text fontSize={14} fontWeight={700}>
                {me.follwer_count}
              </Text>
              <Text fontSize={12} color={Colors.Text.Seconday}>
                フォロワー
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          {me.tweets.map((tweet, index) => (
            <TweetItem key={index} item={tweet} />
          ))}
        </Box>
      </Box>
      <AddTweetButton />
    </NaviInPage>
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
