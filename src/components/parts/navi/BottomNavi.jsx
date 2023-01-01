import {css} from '@emotion/react';
import {Box} from '@/components/atoms';
import {NaviItem} from './NaviItem';
import {ROUTE_OBJECT} from '@/config/RouteObject';
import {Colors} from '@/assets/styles';

export const BottomNavi = () => {
  return (
    <Box row css={container} justifyContent="space-between">
      {ROUTE_OBJECT.map((route, index) => (
        <NaviItem {...route} key={index} />
      ))}
    </Box>
  );
};

const container = css`
  padding: 8px 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${Colors.KeyColor.Wihte};
  border-top: 1px solid ${Colors.Border.Primary};
`;
