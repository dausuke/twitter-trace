import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {useNavigate, useParams} from 'react-router-dom';
import dayjs from 'dayjs';
import {Colors} from '@/assets/styles';
import {TweetItem, TweetImages} from '@/components/common';
import {AppPage} from '@/components/layout/AppPage';
import {Box, Text, Input, Avator, Icon, Pressable} from '@/components/atoms';
import {AuthDialog} from '@/components/auth/AuthDialog';
import {tweetAction} from '@/api';
import {fetchTweet} from '../api';

export const Thread = () => {
  const navigate = useNavigate();
  const {tweetId} = useParams();
  const [tweet, setTweet] = useState();
  const [isShowDialog, setIsShowDialog] = useState(false);

  const handleCommentClick = () => navigate('/post/tweet', {state: {commentTo: tweet?.id}});

  const handleActionError = type => {
    const action = type === 'like' ? 'いいね' : 'リツイート';
    alert(`${action}の投稿に失敗しました`);
  };

  const onFetchTweet = async () => {
    try {
      const response = await fetchTweet(tweetId);
      setTweet(response.data);
    } catch (e) {
      console.error(e);
      alert('スレッドを読み込めませんでした');
    }
  };

  const handleStatusIconClick = async (targetId, type) => {
    try {
      const response = await tweetAction(targetId, type);

      const tweet = response.data.find(data => data.id === Number(tweetId));

      setTweet(tweet);
    } catch (e) {
      console.error(e);
      handleActionError(type);
    }
  };

  const handleDialogBackgroundClick = () => {
    setIsShowDialog(false);
  };

  useEffect(() => {
    onFetchTweet();
  }, [tweetId]);

  const headerOption = {
    headerLeft: (
      <Box onClick={() => navigate(-1)}>
        <Icon.BackIcon />
      </Box>
    ),
    title: 'スレッド',
    titleStyle: {
      textAlign: 'center',
    },
  };

  return (
    <>
      <AppPage headerOption={headerOption}>
        <AuthDialog isShow={isShowDialog} onBackgroundClick={handleDialogBackgroundClick} />

        <Box css={tweetContainer}>
          <Box row css={header} alignItems="center">
            <Avator image={tweet?.user.avator} size={48} />
            <Box css={userWrap}>
              <Text fontWeight={700} css={{textOverflow: 'ellipsis'}}>
                {tweet?.user.name}
              </Text>
              <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                @{tweet?.user.account_name}
              </Text>
            </Box>
          </Box>
          <Box css={tweetContent}>
            <Box css={textField}>
              <Box css={tweetBody}>
                <Text>{tweet?.body}</Text>
                {!!tweet?.images.length && (
                  <Box css={imageWrap}>
                    <TweetImages imageHeight={240} images={tweet?.images} />
                  </Box>
                )}
              </Box>
              <Box row css={time} alignItems="center">
                <Text css={text} fontSize={12} color={Colors.Text.Seconday}>
                  {dayjs(tweet?.created_at).format('YYYY/MM/DD HH:mm:ss')}
                </Text>
              </Box>
            </Box>
            <Box>
              <Box row css={statusWrap}>
                <Box row>
                  <Text fontSize={12} fontWeight={700}>
                    {tweet?.retweet_count}
                  </Text>
                  <Text fontSize={12} color={Colors.Text.Seconday}>
                    件のリツイート
                  </Text>
                </Box>
                <Box row>
                  <Text fontSize={12} fontWeight={700}>
                    {tweet?.comment_count}
                  </Text>
                  <Text fontSize={12} color={Colors.Text.Seconday}>
                    件のコメント
                  </Text>
                </Box>
              </Box>
              <Box row css={statusWrap}>
                <Box row>
                  <Text fontSize={12} fontWeight={700}>
                    {tweet?.like_count}
                  </Text>
                  <Text fontSize={12} color={Colors.Text.Seconday}>
                    件のいいね
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box row css={iconWrap} justifyContent="space-between" alignItems="center">
              <Box css={icon} alignItems="flex-start">
                <Pressable hitSlop={8} onClick={handleCommentClick}>
                  <Icon.CommentIcon color={tweet?.is_commented ? Colors.Icon.Comment : Colors.Icon.Primary} />
                </Pressable>
              </Box>
              <Box css={icon} alignItems="flex-start">
                <Pressable hitSlop={8} onClick={() => handleStatusIconClick(tweet?.id, 'retweet')}>
                  <Icon.RetweetIcon color={tweet?.is_retweeted ? Colors.Icon.Retweet : Colors.Icon.Primary} />
                </Pressable>
              </Box>
              <Box css={icon} alignItems="flex-start">
                <Pressable hitSlop={8} onClick={() => handleStatusIconClick(tweet?.id, 'like')}>
                  <Icon.LikeIcon color={tweet?.is_liked ? Colors.Icon.Like : Colors.Icon.Primary} />
                </Pressable>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box css={commentContainer}>
          {tweet?.comments?.map((data, index) => (
            <TweetItem item={data} key={index} onStatusIconClick={handleStatusIconClick} />
          ))}
        </Box>
        <Box css={fixedForm}>
          <Pressable onClick={handleCommentClick}>
            <Input css={input} placeholder="返信をツイート" />
          </Pressable>
        </Box>
      </AppPage>
    </>
  );
};

const tweetContainer = css`
  padding: 16px;
  gap: 10px;
  border-bottom: 1px solid ${Colors.Border.Primary};
`;

const tweetContent = css`
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
  gap: 10px;
`;

const userWrap = css`
  gap: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const time = css`
  margin-top: 16px;
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
  padding: 0 32px;
`;

const icon = css`
  flex: 1;
`;

const statusWrap = css`
  padding: 16px 0px;
  gap: 8px;
  border-top: solid 1px ${Colors.Border.Primary};
  &:last-child {
    border-bottom: solid 1px ${Colors.Border.Primary};
  }
`;

const input = css`
  width: calc(100% - 32px);
  padding-left: 16px;
  margin: 8px 16px;
  height: 34px;
  bottom: 0;
  border-radius: 999px;
  background-color: ${Colors.Background.Seconday};
`;

const commentContainer = css`
  padding-bottom: 100px;
`;

const fixedForm = css`
  width: 100%;
  position: fixed;
  bottom: 40px;
`;
