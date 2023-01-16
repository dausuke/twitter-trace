import {Tab} from 'react-tabs';
import {css} from '@emotion/react';
import {Text} from '@/common/components/atoms';
import {Colors} from '@/assets/styles';

const TabMenu = ({label, isActive, ...other}) => {
  return (
    <Tab css={tab} {...other}>
      <Text fontWeight={700} color={isActive ? Colors.Text.Primary : Colors.Text.Seconday}>
        {label}
      </Text>
      {isActive && <div css={border} />}
    </Tab>
  );
};

TabMenu.tabsRole = 'Tab';

export {TabMenu};

const tab = css`
  margin: 0;
  padding: 0;
  margin-bottom: 1px;
`;

const border = css`
  height: 4px;
  width: 100%;
  border-radius: 999px;
  background-color: ${Colors.KeyColor.Primary};
  margin-top: 8px;
`;
