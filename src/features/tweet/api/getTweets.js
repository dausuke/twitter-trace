import api from '@/libs/axios';

export const getTweets = () => api.get(`/tweet`);
