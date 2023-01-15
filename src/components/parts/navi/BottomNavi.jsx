import {css} from '@emotion/react';
import {Box} from '@/components/atoms';
import {NaviItem} from './NaviItem';
import {ROUTE_OBJECT} from '@/config';
import {Colors} from '@/assets/styles';

export const BottomNavi = ({content}) => {
  return (
    <Box css={container}>
      {content}
      <Box row css={navi} justifyContent="space-between">
        {ROUTE_OBJECT.map((route, index) => (
          <NaviItem {...route} key={index} />
        ))}
      </Box>
    </Box>
  );
};

const container = css`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${Colors.KeyColor.Wihte};
  border-top: 1px solid ${Colors.Border.Primary};
`;

const navi = css`
  padding: 8px 32px;
  width: 100%;
`;
