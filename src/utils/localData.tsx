import { LOCAL_STORAGE_KEY } from '../constants';
import { CatDataType, getInitialData } from './emptyData';
import JSONbig from 'json-bigint';

export const loadData = (): CatDataType => {
  const storedTasks = JSONbig.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null');
  return storedTasks || getInitialData();
};

export const saveData = (data: CatDataType) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSONbig.stringify(data));
};
