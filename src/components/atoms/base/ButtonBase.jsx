import {css} from '@emotion/react';

export const ButtonBase = props => (
  <button css={[contaienr, props.disabled && disabledOpacity]} {...props}>
    {props.children}
  </button>
);

const contaienr = css`
  cursor: pointer;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 0;
`;

const disabledOpacity = css`
  opacity: 0.5;
`;
