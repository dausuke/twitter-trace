import {css} from '@emotion/react';
import {ButtonBase} from '../base/ButtonBase';
import {Text, Box} from '.';
import {Colors} from '@/assets/styles';

export const Button = ({fontSize = 12, px = 40, py = 10, outline, children, ...props}) => (
  <Box justify="center" align="center" css={[container, !outline ? defaultStyle : outlineStyle]}>
    <ButtonBase css={[button, {padding: `${py}px ${px}px`}]} {...props}>
      <Text
        css={baseText}
        color={!outline ? Colors.Text.White : Colors.Text.Primary}
        fontSize={fontSize}
        textAlign="center">
        {children}
      </Text>
    </ButtonBase>
  </Box>
);

const container = css`
  border-radius: 999px;
  overflow: hidden;
`;

const button = css`
  width: 100%;
  height: 100%;
`;

const defaultStyle = css`
  background-color: ${Colors.Button.Seconday};
`;

const outlineStyle = css`
  background-color: ${Colors.Button.Outline};
  border: 1px solid ${Colors.Border.Secondary};
`;

const baseText = css`
  line-height: 1.2;
`;
