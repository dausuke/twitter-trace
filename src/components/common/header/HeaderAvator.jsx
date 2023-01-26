import {useNavigate} from 'react-router';
import {HeaderButton, Avator} from '@/components/atoms';

export const HeaderAvator = ({user}) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    !!user && navigate(`/user/${user.account_name}`);
  };

  return (
    <HeaderButton onClick={onButtonClick} hitslop={4}>
      <Avator image={user?.avator} size={30} />
    </HeaderButton>
  );
};
