import Back from './back.svg';
import Camera from './camera.svg';
import Close from './close.svg';
import Comment from './comment.svg';
import Export from './export.svg';
import Like from './like.svg';
import MailPlus from './mail_plus.svg';
import Plus from './plus.svg';
import Retweet from './retweet.svg';
import Setting from './setting.svg';
import {IconBase} from './IconBase';
import {Colors} from '../styles';

const DEFAULT_COLOR = Colors.Icon.Primary;
const DEFAULT_SIZE = 18;

const icons = {Back, Camera, Close, Comment, Export, Like, MailPlus, Plus, Retweet, Setting};

const Base = ({color = DEFAULT_COLOR, size = DEFAULT_SIZE, name}) => (
  <IconBase icons={icons} color={color} size={size} name={name} />
);

export const BackIcon = props => <Base name="Back" {...props} />;
export const CameraIcon = props => <Base name="Camera" {...props} />;
export const CloseIcon = props => <Base name="Close" {...props} />;
export const CommentIcon = props => <Base name="Comment" {...props} />;
export const ExportIcon = props => <Base name="Export" {...props} />;
export const LikeIcon = props => <Base name="Like" {...props} />;
export const MailPlusIcon = props => <Base name="MailPlus" {...props} />;
export const PlusIcon = props => <Base name="Plus" {...props} />;
export const RetweetIcon = props => <Base name="Retweet" {...props} />;
export const SettingIcon = props => <Base name="Setting" {...props} />;
