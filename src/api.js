import apisauce from 'apisauce';
import { PAUSE } from 'redux-persist';

export const api = apisauce.create({
  baseURL: 'https://picsum.photos/v2/',
  headers: {Accept: 'application/vnd.github.v3+json'},
  timeout: 15000,
});

export const getList = (page) => {
  return api.get(`list?page=${page}&limit=25`);
};

