import {useState} from 'react';
import {css} from '@emotion/react';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom';
import {tweetAction} from '@/api';
import {Box, Text, Avator, Pressable} from '@/components/atoms';
import {AuthDialog} from '@/components/auth/AuthDialog';
import {Colors} from '@/assets/styles';
import {CONTENT_WIDTH} from '@/config';
import {checkLogin} from '@/utils/auth';
import {TweetStatusIcon} from './TweetStatusIcon';
import {TweetImages} from './TweetImages';

export const TweetItem = ({item}) => {
  const navigate = useNavigate();
  const {user, body, created_at, images, ...statusData} = item;
  const [isShowDialog, setIsShowDialog] = useState(false);

  const calcCreatedDiff = createdAt => {
    const now = dayjs();
    const createdDate = dayjs(createdAt);
    const diff = now.diff(createdDate, 'second');
    const minute = Math.floor(diff / 60);

    if (minute === 0) return `${diff}秒`;
    if (minute < 60) return `${minute}分`;

    const hour = Math.floor(diff / (60 * 60));

    if (hour < 24) return `${hour}時間`;

    const day = Math.floor(diff / (60 * 60 * 24));

    if (day < 7) return `${day}日`;

    return createdDate.format('YYYY/MM/DD');
  };

  const authGuard = () => {
    const isLogin = checkLogin();
    setIsShowDialog(!isLogin);
    return isLogin;
  };

  const eventCancel = e => e.stopPropagation();

  const handleIconClick = async icon => {
    const result = authGuard();
    if (result === false) return;

    icon === 'comment'
      ? navigate('/post/tweet', {state: {commentTo: item.id}})
      : await tweetAction(item.id, icon);
  };

  const onTweetClick = () => {
    navigate(`/tweet/${item.id}`);
  };

  const onDialogBackgroundClick = () => {
    setIsShowDialog(false);
  };

  return (
    <>
      <AuthDialog isShow={isShowDialog} onBackgroundClick={onDialogBackgroundClick} />
      <Pressable onClick={onTweetClick}>
        <Box row css={container}>
          <Box>
            <Avator image={user.avator} size={48} />
          </Box>
          <Box css={content}>
            <Box css={textField}>
              <Box row css={header} alignItems="center" justifyContent="space-between">
                <Box row alignItems="center">
                  <div css={userWrap}>
                    <Text fontWeight={700} css={{textOverflow: 'ellipsis'}}>
                      {user.name}
                    </Text>
                    <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                      @{user.account_name}
                    </Text>
                  </div>
                  <Box row css={time} alignItems="center">
                    <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                      •
                    </Text>
                    <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                      {calcCreatedDiff(created_at)}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box css={tweetBody}>
                <Text>{body}</Text>
                {!!images.length && (
                  <Box css={imageWrap}>
                    <TweetImages images={images} />
                  </Box>
                )}
              </Box>
            </Box>
            <Box row css={iconWrap} justifyContent="space-between" alignItems="center" onClick={eventCancel}>
              <TweetStatusIcon
                icon="comment"
                isActive={statusData.is_commented}
                count={statusData.comment_count}
                onClick={handleIconClick}
              />
              <TweetStatusIcon
                icon="retweet"
                isActive={statusData.is_retweeted}
                count={statusData.retweet_count}
                onClick={handleIconClick}
              />
              <TweetStatusIcon
                icon="like"
                isActive={statusData.is_liked}
                count={statusData.like_count}
                onClick={handleIconClick}
              />
            </Box>
          </Box>
        </Box>
      </Pressable>
    </>
  );
};

const container = css`
  padding: 16px;
  gap: 10px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const content = css`
  width: ${CONTENT_WIDTH}px;
  gap: 16px;
`;

const tweetBody = css`
  gap: 8px;
`;

const textField = css`
  gap: 4px;
  width: 100%;
`;

const header = css`
  width: 100%;
`;

const userWrap = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const time = css`
  max-width: 94px;
  min-width: 32px;
`;

const imageWrap = css`
  width: 100%;
`;

const text = css`
  margin-left: 2px;
  line-height: 120%;
`;

const iconWrap = css`
  width: 100%;
  padding-right: 40px;
`;
