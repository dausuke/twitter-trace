import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box, Text} from '../atoms';
import {Colors} from '@/assets/styles';

const HEIGHT = 56;

export const PageHeader = ({
  headerLeft,
  headerRight,
  content,
  title,
  text,
  titleStyle,
  showBorder = true,
  textStyle,
}) => {
  const [isShowHeader, setIsShowHeader] = useState(true);
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    const scroll = window.scrollY;

    scroll > HEIGHT && scroll > position && setIsShowHeader(false);
    (scroll < HEIGHT || scroll < position) && setIsShowHeader(true);

    setPosition(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Box row css={[container, showBorder && border, !isShowHeader && isHidden]} alignItems="center">
      <Box css={button} justifyContent="center">
        {!!headerLeft && headerLeft}
      </Box>
      <Box css={main} justifyContent="center">
        {!content ? (
          <>
            {title && (
              <Text fontSize={16} fontWeight={700} css={titleStyle}>
                {title}
              </Text>
            )}
            {text && (
              <Text fontSize={12} color={Colors.Text.Seconday} css={textStyle}>
                {text}
              </Text>
            )}
          </>
        ) : (
          {content}
        )}
      </Box>
      <Box css={button} justifyContent="center">
        {!!headerRight && headerRight}
      </Box>
    </Box>
  );
};

const container = css`
  padding: 10px 16px 16px;
  gap: 24px;
  width: 100%;
  height: ${HEIGHT}px;
  position: fixed;
  top: 0;
  background-color: ${Colors.KeyColor.Wihte};
  z-index: 999;
  transform: 'none';
  transition: transform 0.1s ease;
`;

const main = css`
  flex: 1;
`;

const button = css`
  min-width: 30px;
  min-height: 30px;
`;

const border = css`
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const isHidden = css`
  transform: translateY(-150%);
`;
