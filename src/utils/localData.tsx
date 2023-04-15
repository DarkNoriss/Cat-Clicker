import { LOCAL_STORAGE_KEY } from '../constants';
import { CatDataType, emptyData } from './emptyData';

export const loadData = () => {
  // console.log('LOADING DATA');
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null');
  return storedTasks || emptyData();
};

export const saveData = (data: CatDataType) => {
  // console.log('SAVING DATA');
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
