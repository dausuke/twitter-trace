import {css} from '@emotion/react';
import {Text, Box} from '@/components/atoms';
import {Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';

const calcIcon = ({icon, like, comment, retweet}) => {
  switch (icon) {
    case 'like':
      return like;
    case 'comment':
      return comment;
    case 'retweet':
      return retweet;
  }
};

export const TweetStatusIcon = ({icon, isActive, count, onClick}) => {
  const statusColor = !isActive
    ? Colors.Icon.Primary
    : calcIcon({icon, like: Colors.Icon.Like, comment: Colors.Icon.Comment, retweet: Colors.Icon.Retweet});

  const tweetStatusIcon = calcIcon({
    icon,
    like: <Icon.LikeIcon color={statusColor} />,
    comment: <Icon.CommentIcon color={statusColor} />,
    retweet: <Icon.RetweetIcon color={statusColor} />,
  });

  return (
    <Box row css={container} alignItems="center" onClick={onClick}>
      {tweetStatusIcon}
      <Text color={statusColor} fontSize={12}>
        {count - 10000 >= 0 ? `${(count / 10000).toFixed(1)}万` : count}
      </Text>
    </Box>
  );
};

const container = css`
  gap: 8px;
`;
