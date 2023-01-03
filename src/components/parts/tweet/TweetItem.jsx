import {css} from '@emotion/react';
import dayjs from 'dayjs';
import {Box, Text, Avator} from '@/components/atoms';
import {IconField} from './IconField';
import {Colors} from '@/assets/styles';
import {CONTENT_WIDTH} from '@/config/RouteObject';

export const TweetItem = ({item}) => {
  const {user_name, account_name, body, created_at, avator, ...statusData} = item;

  const calcCreatedDiff = createdAt => {
    const now = dayjs();
    const createdDate = dayjs(createdAt);
    const diff = now.diff(createdDate, 'second');
    const minute = Math.floor(diff / 60);

    if (minute === 0) return `${diff}秒`;
    if (minute < 60) return `${minute}分`;

    const hour = Math.floor(diff / (60 * 60));

    if (hour < 24) return `${hour}時間`;

    const day = Math.floor(diff / (60 * 60 * 24));

    if (day < 7) return `${day}日`;

    return createdDate.format('YYYY/MM/DD');
  };

  return (
    <Box row css={container}>
      <Box>
        <Avator image={avator} size={48} />
      </Box>
      <Box css={content}>
        <Box css={textField}>
          <Box row css={header} alignItems="center">
            <div css={user}>
              <Text fontWeight={700} css={{textOverflow: 'ellipsis'}}>
                {user_name}
              </Text>
              <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                @{account_name}
              </Text>
            </div>
            <Box row css={time} alignItems="center">
              <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                •
              </Text>
              <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                {calcCreatedDiff(created_at)}
              </Text>
            </Box>
          </Box>
          <Box>
            <Text>{body}</Text>
          </Box>
        </Box>
        <IconField data={statusData} />
      </Box>
    </Box>
  );
};

const container = css`
  padding: 16px;
  gap: 10px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const content = css`
  width: ${CONTENT_WIDTH}px;
  gap: 16px;
`;

const textField = css`
  gap: 8px;
  width: 100%;
`;

const header = css`
  width: 100%;
`;

const user = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const time = css`
  max-width: 94px;
  min-width: 32px;
`;

const text = css`
  margin-left: 2px;
  line-height: 120%;
`;
