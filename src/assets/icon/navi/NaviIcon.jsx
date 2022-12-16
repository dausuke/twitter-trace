import Home from './home.svg';
import Search from './search.svg';
import Notice from './notice.svg';
import Mail from './mail.svg';
import HomeActive from './home_active.svg';
import SearchActive from './search_active.svg';
import NoticeActive from './notice_active.svg';
import MailActive from './mail_active.svg';
import {IconBase} from '../IconBase';
import {Colors} from '@/assets/styles';

const DEFAULT_COLOR = Colors.Icon.Navi;
const DEFAULT_SIZE = 24;

const icons = {Home, Search, Notice, Mail, HomeActive, SearchActive, NoticeActive, MailActive};

const Base = ({color = DEFAULT_COLOR, size = DEFAULT_SIZE, name}) => (
  <IconBase icons={icons} color={color} size={size} name={name} />
);

export const HomeIcon = props => <Base name="Home" {...props} />;
export const SearchIcon = props => <Base name="Search" {...props} />;
export const NoticeIcon = props => <Base name="Notice" {...props} />;
export const MailIcon = props => <Base name="Mail" {...props} />;
export const HomeIconActice = props => <Base name="HomeActice" {...props} />;
export const SearchIconActice = props => <Base name="SearchActice" {...props} />;
export const NoticeIconActice = props => <Base name="NoticeActice" {...props} />;
export const MailIconActice = props => <Base name="MailActice" {...props} />;
