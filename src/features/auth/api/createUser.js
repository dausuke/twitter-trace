import api from '@/libs/axios';

export const createUser = data => api.post(`/register`, data);
