import {css} from '@emotion/react';

const justifyKey = key => {
  switch (key) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    default:
      return 'flex-start';
  }
};

const alignKey = key => {
  switch (key) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'stretch':
      return 'stretch';
    case 'baseline':
      return 'baseline';
    default:
      return 'normal';
  }
};

export const Box = ({row, wrap, justify = 'start', align = 'normal', children, ...props}) => {
  const flexDirection = row ? 'row' : 'column';
  const flexWrap = wrap ? 'wrap' : 'nowrap';
  const justifyContent = justifyKey(justify);
  const alignItems = alignKey(align);

  return (
    <div css={[container, {flexDirection, flexWrap, justifyContent, alignItems}]} {...props}>
      {children}
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Box;
