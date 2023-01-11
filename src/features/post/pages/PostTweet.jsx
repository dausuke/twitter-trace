import {useState} from 'react';
import {css} from '@emotion/react';
import {useNavigate} from 'react-router';
import {Box, TextArea, HeaderButton, Avator} from '@/components/atoms';
import {ModalPage} from '@/components/parts';
import {Avator_A} from '@/features/mock/avators';
import {Colors} from '@/assets/styles';
import {Icon} from '@/components/atoms';
import {ActionButton} from '../components';
import {createTweet} from '../api/createTweet';

export const PostTweet = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  const handleTextChange = text => {
    setText(text);
  };

  const postTweet = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);

      const data = {body: text};

      await createTweet(data);
      navigate('/');
    } catch (e) {
      console.error(e);
      alert('ツイートの投稿に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const headerOption = {
    headerLeft: <HeaderButton onClick={() => navigate(-1)}>キャンセル</HeaderButton>,
    headerRight: (
      <HeaderButton onClick={postTweet} isButton>
        ツイートする
      </HeaderButton>
    ),
  };

  return (
    <ModalPage headerOption={headerOption}>
      <Box row css={container}>
        <Avator size={48} image={Avator_A} />
        <Box css={content}>
          <Box css={form}>
            <TextArea
              onChange={event => handleTextChange(event.target.value)}
              placeholder="いまどうしてる？"
            />
          </Box>
          <Box row css={inputFooter}>
            <ActionButton
              hitSlop={8}
              onClick={() => console.log('image')}
              icon={<Icon.ImageIcon color={Colors.KeyColor.Primary} size={24} />}
            />
            <ActionButton
              hitSlop={8}
              onClick={() => console.log('global')}
              label="全員が返信できます"
              icon={<Icon.GlobalIcon color={Colors.KeyColor.Primary} size={24} />}
            />
          </Box>
        </Box>
      </Box>
    </ModalPage>
  );
};

const container = css`
  padding: 24px 16px;
  gap: 12px;
`;

const content = css`
  flex: 1;
  padding: 48px 0 16px;
`;

const form = css`
  min-height: 200px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const inputFooter = css`
  gap: 16px;
  padding: 16px 0;
`;
