import {css} from '@emotion/react';
import {Box, Text, Avator} from '@/common/components/atoms';
import {Colors} from '@/assets/styles';

const AVATOR_SIZE = 34;

export const NoticeItem = ({item}) => {
  const {body, users} = item;
  const showUser = users.slice(0, 2);
  const otherUserCount = users.length - showUser.length;

  return (
    <Box css={container}>
      <Box row css={avatorWrap}>
        {showUser.map((user, index) => (
          <Avator key={index} image={user.avator} size={AVATOR_SIZE} />
        ))}
      </Box>
      <Box css={content} row>
        <Text>
          {showUser.map((user, index) => (
            <Text key={index} css={userText} fontWeight={700}>
              {user.name}
            </Text>
          ))}
          <Text>さん{otherUserCount > 0 && <Text>他{otherUserCount}名</Text>}</Text>
          <Text>に{body}</Text>
        </Text>
      </Box>
    </Box>
  );
};

const container = css`
  padding: 16px;
  gap: 8px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const avatorWrap = css`
  gap: 4px;
`;

const content = css`
  padding-left: ${AVATOR_SIZE}px;
`;

const userText = css`
  margin-right: 2px;
`;
