import {useState} from 'react';
import {css} from '@emotion/react';
import {Tabs, TabList} from 'react-tabs';
import {useNavigate, useLocation} from 'react-router-dom';
import {Box, Icon} from '@/components/atoms';
import {HeaderButton} from '@/components/common';
import {AppPage} from '@/components/layout/AppPage';
import {TabContent, TabMenu} from '../components';
import {Colors} from '@/assets/styles';
import Mock from '../mock';
import 'react-tabs/style/react-tabs.css';

export const Follow = () => {
  const {search, pathname} = useLocation();
  const query = new URLSearchParams(search);
  const selecedIndex = query.get('selectIndex');

  const [tabIndex, setTabIndex] = useState(Number(selecedIndex));
  const LIST = [
    {label: 'フォロー', value: 'follow'},
    {label: 'フォロワー', value: 'follwer'},
  ];
  const navigate = useNavigate();
  const headerOption = {
    headerLeft: (
      <HeaderButton onClick={() => navigate(-1)}>
        <Icon.BackIcon color={Colors.Icon.Black} />
      </HeaderButton>
    ),
    title: Mock.me.user_name,
    text: Mock.me.account_name,
    showBorder: false,
  };

  const onSelectTab = index => {
    navigate(`${pathname}?selectIndex=${index}`);
    setTabIndex(index);
  };

  return (
    <AppPage headerOption={headerOption}>
      <Box css={container}>
        <Tabs selectedIndex={tabIndex} onSelect={onSelectTab}>
          <TabList css={tabList}>
            {LIST.map(({label}, index) => (
              <TabMenu key={label} label={label} isActive={index === tabIndex} />
            ))}
          </TabList>
          <Box css={content}>
            {LIST.map(({value}) => (
              <TabContent key={value} value={value} />
            ))}
          </Box>
        </Tabs>
      </Box>
    </AppPage>
  );
};

const container = css`
  padding: 16px 0 24px;
`;

const tabList = css`
  padding: 0 54px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const content = css`
  padding: 0 16px;
`;
