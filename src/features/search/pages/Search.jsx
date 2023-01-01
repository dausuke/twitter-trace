import {css} from '@emotion/react';
import {SearchInput} from '../components/SearchInput';
import {Tweet, AddTweetButton} from '@/features/tweets/components';
import mock from '@/features/tweets/mock';
import {NaviInPage, Avator} from '@/components/parts';
import {HeaderButton, Box} from '@/components/atoms';
import Avator_A from '@/features/tweets/mock/images/A.png';

export const Search = () => {
  const headerOption = {
    headerLeft: (
      <HeaderButton>
        <Avator image={Avator_A} size={30} />
      </HeaderButton>
    ),
    content: <SearchInput />,
  };

  return (
    <NaviInPage headerOption={headerOption}>
      <Box css={content}>
        {mock.map((data, index) => (
          <Tweet data={data} key={index} />
        ))}
        <AddTweetButton />
      </Box>
    </NaviInPage>
  );
};

const content = css`
  margin-top: 24px;
`;
