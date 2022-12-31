import {useState} from 'react';
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
  const [statusCount, setStatusCount] = useState(count);
  const [isActived, setIsActived] = useState(isActive);

  const statusColor = !isActived
    ? Colors.Icon.Primary
    : calcIcon({icon, like: Colors.Icon.Like, comment: Colors.Icon.Comment, retweet: Colors.Icon.Retweet});

  const tweetStatusIcon = calcIcon({
    icon,
    like: <Icon.LikeIcon color={statusColor} />,
    comment: <Icon.CommentIcon color={statusColor} />,
    retweet: <Icon.RetweetIcon color={statusColor} />,
  });

  // const isOverThousand =

  const handleClick = () => {
    const newCount = isActived ? statusCount - 1 : statusCount + 1;
    const newActive = !isActived;

    setStatusCount(newCount);
    setIsActived(newActive);

    onClick?.(newActive);
  };

  return (
    <Box row css={container} alignItems="center" onClick={handleClick}>
      {tweetStatusIcon}
      <Text color={statusColor} fontSize={12}>
        {statusCount - 10000 >= 0 ? `${(statusCount / 10000).toFixed(1)}万` : statusCount}
      </Text>
    </Box>
  );
};

const container = css`
  gap: 8px;
`;
