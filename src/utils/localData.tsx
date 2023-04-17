import { LOCAL_STORAGE_KEY } from '../constants';
import { CatDataType, getInitialData } from './emptyData';

export const loadData = (): CatDataType => {
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null');
  return storedTasks || getInitialData();
};

export const saveData = (data: CatDataType) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
