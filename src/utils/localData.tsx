import { LOCAL_STORAGE_KEY } from '../constants';
import { Data } from './types';

export const loadDataCats = () => {
  console.log('Loading local storage...');
};

export const loadData = (): Data[] => {
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null') as Data[];
  return storedTasks || emptyData();
};

export const saveData = () => {
  console.log('Saving to local storage...');
};

const emptyData = (): Data[] => {
  return [{ cats: 0 }];
};
