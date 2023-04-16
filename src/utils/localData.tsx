import { LOCAL_STORAGE_KEY } from '../constants';
import { CatDataType, getInitialData } from './emptyData';

export const loadData = (): CatDataType => {
  // console.log('LOADING DATA');
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null');
  return storedTasks || getInitialData();
};

export const saveData = (data: CatDataType) => {
  // console.log('SAVING DATA');
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
