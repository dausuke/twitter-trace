import api from '@/libs/axios';

export const fetchTweet = tweetId => api.get(`/tweet/${tweetId}`);
