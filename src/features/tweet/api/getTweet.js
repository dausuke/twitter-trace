import api from '@/libs/axios';

export const getTweet = () => api.get(`/tweet`);
