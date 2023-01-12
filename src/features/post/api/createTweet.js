import api from '@/libs/axios';

export const createTweet = (data, config) => api.post(`/tweet/create`, data, config);
