import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const Avator = ({image, width = 90, height = 90}) => {
  return (
    <div css={[avator, {width, height}]}>
      <img src={image} css={avatorImage} />
    </div>
  );
};

const avator = css`
  border: 1px solid ${Colors.Border.White};
  border-radius: 50%;
  overflow: hidden;
`;

const avatorImage = css`
  width: 100%;
  height: 100%;
`;
