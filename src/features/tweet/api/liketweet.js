import api from '@/libs/axios';

export const likeTweet = tweetId => api.post(`/tweet/${tweetId}/like`);
