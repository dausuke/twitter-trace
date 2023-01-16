import {TabPanel} from 'react-tabs';
import {Box} from '@/common/components/atoms';
import {UserItem} from './UserItem';
import Mock from '../mock';

const TabContent = ({value, ...other}) => {
  return (
    <TabPanel {...other}>
      {Mock.me[value].map((content, index) => (
        <Box key={index}>
          <UserItem user={content} />
        </Box>
      ))}
    </TabPanel>
  );
};

TabContent.tabsRole = 'TabPanel';

export {TabContent};
