import api from '@/libs/axios';

export const getTweets = params => api.get(`/tweet`, {params});
