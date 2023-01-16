import {css} from '@emotion/react';
import {Box, Text, Avator, Button} from '@/common/components/atoms';
import {Colors} from '@/assets/styles';
import {CONTENT_WIDTH} from '@/config';

export const UserItem = ({user}) => {
  return (
    <Box row css={container}>
      <Avator image={user.avator} size={48} />
      <Box css={content}>
        <Box row justifyContent="space-between">
          <Box css={nameWrap}>
            <Text fontWeight={700}>{user.user_name}</Text>
            <Text fontSize={12} color={Colors.Text.Seconday}>
              {user.account_name}
            </Text>
          </Box>
          <Box>
            <Button py={8} px={20}>
              フォロー
            </Button>
          </Box>
        </Box>
        <Box css={introductionWrap}>
          <Text css={introductionText}>{user.introduction}</Text>
        </Box>
      </Box>
    </Box>
  );
};

const container = css`
  width: 100%;
  gap: 8px;
  padding: 16px 0;
`;

const content = css`
  width: ${CONTENT_WIDTH}px;
  gap: 8px;
`;

const nameWrap = css`
  gap: 4px;
`;

const introductionWrap = css`
  width: 100%;
`;

const introductionText = css`
  line-height: 150%;
  overflow-wrap: break-word;
`;
