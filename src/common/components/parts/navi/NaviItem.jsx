import {NavLink} from 'react-router-dom';
import {css} from '@emotion/react';
import {Box} from '@/common/components/atoms';
import {NaviIcon} from '@/common/components/atoms';

export const NaviItem = ({path, icon}) => {
  const renderIcon = isActive => {
    switch (icon) {
      case 'Home':
        return isActive ? <NaviIcon.HomeIconActive /> : <NaviIcon.HomeIcon />;
      case 'Search':
        return isActive ? <NaviIcon.SearchIconActive /> : <NaviIcon.SearchIcon />;
      case 'Notice':
        return isActive ? <NaviIcon.NoticeIconActive /> : <NaviIcon.NoticeIcon />;
      case 'Mail':
        return isActive ? <NaviIcon.MailIconActive /> : <NaviIcon.MailIcon />;
    }
  };

  return (
    <Box>
      <NavLink css={navi} to={path}>
        {({isActive}) => renderIcon(isActive)}
      </NavLink>
    </Box>
  );
};

const navi = css`
  padding: 4px;
`;
