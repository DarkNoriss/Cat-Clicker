import { CatType } from '../App';
import { LOCAL_STORAGE_KEY } from '../constants';

export const loadData = () => {
  // console.log('LOADING DATA');
  const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null');
  return storedTasks || emptyData();
};

export const saveData = (data: CatType) => {
  // console.log('SAVING DATA');
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

const emptyData = () => {
  const catDataEmpty = {
    cats: 0,
    cpc: 1,
    cps: 0,
    upgrades: [],
    buildings: [],
  };
  return catDataEmpty;
};
