import {css} from '@emotion/react';
import {Box} from '@/components/atoms';
import {PageHeader} from '@/components/parts';
import {Colors} from '@/assets/styles';

export const Page = ({children, headerOption}) => (
  <Box css={container}>
    <PageHeader
      headerLeft={headerOption.headerLeft}
      headerRight={headerOption.headerRight}
      {...headerOption}
    />
    {children}
  </Box>
);

const container = css`
  padding-bottom: 24px;
  background-color: ${Colors.Background.Primary};
`;
