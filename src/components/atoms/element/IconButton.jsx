import {css} from '@emotion/react';
import {ButtonBase} from '../base/ButtonBase';
import {Box} from '.';

export const IconButton = ({icon, size, color, onClick, ...props}) => (
  <Box
    justify="center"
    align="center"
    css={[container, {width: size, height: size, backgroundColor: color}]}
    {...props}>
    <ButtonBase css={button} onClick={onClick}>
      {icon}
    </ButtonBase>
  </Box>
);

const container = css`
  border-radius: 50%;
  overflow: hidden;
`;

const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
