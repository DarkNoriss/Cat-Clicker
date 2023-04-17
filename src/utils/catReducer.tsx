import { CatDataType } from './emptyData';
import { produce } from 'immer';

export const catReducer = (state: CatDataType, action: any) => {
  switch (action.type) {
    case 'add_cat':
      return produce(state, (draftState) => {
        draftState.cats.amount += draftState.cats.perClick;
      });
    case 'buy_building':
      console.log('buy_building');
      return state;
    default:
      console.log('no type');
      return state;
  }
};
