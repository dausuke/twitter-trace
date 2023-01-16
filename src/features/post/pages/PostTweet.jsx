import {useState} from 'react';
import {css} from '@emotion/react';
import {useNavigate, useLocation} from 'react-router-dom';
import {Box, TextArea, HeaderButton, Avator} from '@/common/components/atoms';
import {ModalPage} from '@/common/components/parts';
import {Avator_A} from '@/features/mock/avators';
import {Colors} from '@/assets/styles';
import {Icon} from '@/common/components/atoms';
import {ActionButton, ImagePreview} from '../components';
import {createTweet} from '../api/createTweet';

export const PostTweet = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState();

  const handleTextChange = text => {
    setText(text);
  };

  const onImageButtonClick = () => {
    const input = document.getElementById('fileInput');
    input.click();
  };

  const onFileChange = event => {
    if (!event.target.files?.length) return;

    if (event.target.files?.length > 4) {
      alert('添付できる画像枚数は4枚までです');
      return;
    }

    setPreviewImages([]);
    setImages(event.target.files);

    for (const file of event.target.files) {
      const reader = new FileReader();

      reader.onload = e => setPreviewImages(values => [...values, {name: file.name, uri: e.target.result}]);
      reader.readAsDataURL(file);
    }
  };

  const postTweet = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
        transformRequest: formData => formData,
      };
      const params = new FormData();

      if (!!images?.length) {
        for (const image of images) params.append('images[]', image);
      }
      params.append('body', text);
      state?.commentTo !== undefined && params.append('comment_to', state.commentTo);

      await createTweet(params, config);
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
      <Box css={container}>
        <Box row css={gap}>
          <Box css={avatorWrap}>
            <Avator size={40} image={Avator_A} />
          </Box>
          <Box css={inputwWrap}>
            <TextArea
              onChange={event => handleTextChange(event.target.value)}
              placeholder={state?.commentTo === undefined ? '今どうしてる？' : '返信をツイート'}
            />
          </Box>
        </Box>
        <Box css={previewWrap}>{!!previewImages?.length && <ImagePreview images={previewImages} />}</Box>
        <Box row css={inputFooter}>
          <ActionButton
            hitSlop={8}
            onClick={onImageButtonClick}
            icon={<Icon.ImageIcon color={Colors.KeyColor.Primary} size={24} />}
          />
          <ActionButton
            label="全員が返信できます"
            icon={<Icon.GlobalIcon color={Colors.KeyColor.Primary} size={24} />}
          />
          <input
            onChange={onFileChange}
            type="file"
            accept="image/png,image/jpg"
            id="fileInput"
            multiple
            hidden
          />
        </Box>
      </Box>
    </ModalPage>
  );
};

const container = css`
  padding: 24px 16px;
`;

const gap = css`
  gap: 12px;
`;

const avatorWrap = css`
  width: 40px;
`;

const inputwWrap = css`
  width: calc(100% - 40px);
  padding: 40px 0 16px;
`;

const previewWrap = css`
  width: 100%;
  min-height: 140px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const inputFooter = css`
  gap: 16px;
  padding: 16px 0;
`;
