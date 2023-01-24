import api from '@/libs/axios';

export const loginUser = data => api.post(`/login`, data);
