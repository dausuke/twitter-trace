import {css} from '@emotion/react';

export const Box = ({
  row,
  wrap,
  justifyContent = 'normal',
  alignItems = 'normal',
  display = 'flex',
  children,
  ...props
}) => {
  const flexDirection = row ? 'row' : 'column';
  const flexWrap = wrap ? 'wrap' : 'nowrap';
  const flexStyle = display === 'flex' ? {flexDirection, flexWrap, justifyContent, alignItems} : null;

  return (
    <div css={[container, {display, ...flexStyle}]} {...props}>
      {children}
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Box;
