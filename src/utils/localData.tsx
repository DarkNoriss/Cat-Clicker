import { LOCAL_STORAGE_KEY } from '../constants';
import { Data, Props } from './types';

export const loadData = (): Data[] => {
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null') as Data[];
  return storedTasks || emptyData();
};

export const saveData = (data: Data[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

const emptyData = (): Data[] => {
  return [{ cats: 0 }];
};
