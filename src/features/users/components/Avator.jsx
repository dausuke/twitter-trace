import {css} from '@emotion/react';
import {Colors} from '@/assets/styles';

export const Avator = ({image}) => {
  return (
    <div css={avator}>
      <img src={image} css={avatorImage} />
    </div>
  );
};

const avator = css`
  width: 90px;
  height: 90px;
  border: 1px solid ${Colors.Border.White};
  border-radius: 50%;
  overflow: hidden;
`;

const avatorImage = css`
  width: 100%;
  height: 100%;
`;
