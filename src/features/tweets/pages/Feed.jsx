import {Text} from '@/components/atoms';
import {AddTweetButton} from '../components/AddTweetButton';
import {Tweet} from '../components/Tweet';
import {Page} from '@/components/page';
import mock from '../mock';

export const Feed = () => {
  return (
    <Page>
      {mock.map((data, index) => (
        <Tweet data={data} key={index} />
      ))}
      <AddTweetButton />
    </Page>
  );
};
