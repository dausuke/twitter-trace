import {css} from '@emotion/react';
import {ButtonBase} from '../base/ButtonBase';
import {Box} from '.';
import {Colors} from '@/assets/styles';

export const IconButton = ({icon, size = 58, background = Colors.KeyColor.Primary, hasShadow, ...props}) => (
  <Box
    justify="center"
    align="center"
    css={[container, hasShadow && shadow, {width: size, height: size, background}]}>
    <ButtonBase css={button} {...props}>
      {icon}
    </ButtonBase>
  </Box>
);

const container = css`
  border-radius: 50%;
  overflow: hidden;
`;

const shadow = css`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
`;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
