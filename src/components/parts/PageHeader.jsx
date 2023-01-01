import {css} from '@emotion/react';
import {Box, Text} from '../atoms';

export const PageHeader = ({headerLeft, headerRight, content, title, text}) => {
  return (
    <Box row>
      <Box css={button}>{headerLeft && {headerLeft}}</Box>
      <Box css={main}>
        {!content ? (
          <>
            {title && <Text>{title}</Text>}
            {text && <Text>{text}</Text>}
          </>
        ) : (
          {content}
        )}
      </Box>
      <Box css={button}>{headerRight && {headerRight}}</Box>
    </Box>
  );
};

const main = css`
  flex: 1;
`;

const button = css`
  width: 30px;
  height: 30px;
`;
