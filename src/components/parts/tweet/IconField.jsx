import {css} from '@emotion/react';
import {Box, Icon} from '@/components/atoms';
import {TweetStatusIcon} from './TweetStatusIcon';

export const IconField = ({data}) => {
  return (
    <Box row css={container} justifyContent="space-between" alignItems="center">
      <TweetStatusIcon icon="comment" isActive={data.is_commented} count={data.commnet_count} />
      <TweetStatusIcon icon="retweet" isActive={data.is_retweeted} count={data.retweet_count} />
      <TweetStatusIcon icon="like" isActive={data.is_liked} count={data.like_count} />
      <Icon.ExportIcon />
    </Box>
  );
};

const container = css`
  width: 100%;
`;
