import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const Avator = ({image, size = 90}) => (
  <div css={[avator, {width: size, height: size}]}>
    <img src={image} css={avatorImage} />
  </div>
);

const avator = css`
  border: 1px solid ${Colors.Border.White};
  border-radius: 50%;
  overflow: hidden;
`;

const avatorImage = css`
  width: 100%;
  height: 100%;
`;
