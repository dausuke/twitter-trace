import api from '@/libs/axios';

export const createTweet = data => api.post(`/tweet/create`, data);
