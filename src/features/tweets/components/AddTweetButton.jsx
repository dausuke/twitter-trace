import {css} from '@emotion/react';
import {IconButton, Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';

export const AddTweetButton = props => {
  return (
    <IconButton
      onClick={props.onClick}
      css={shadow}
      size={58}
      color={Colors.KeyColor.Primary}
      icon={<Icon.PlusIcon size={24} color="#FFFFFF" />}
    />
  );
};

const shadow = css`
  position: fixed;
  right: 16px;
  bottom: 66px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
`;
