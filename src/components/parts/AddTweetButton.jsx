import {css} from '@emotion/react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Icon} from '@/components/atoms';
import {Colors} from '@/assets/styles';

export const AddTweetButton = props => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (props.onClick) {
      props.onClick();
      return;
    }

    navigate('/post/tweet');
  };

  return (
    <IconButton
      onClick={onButtonClick}
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
