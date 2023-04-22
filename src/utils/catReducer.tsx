import { PRICE_MULTIPLIER } from '../constants';
import { CatDataType } from './emptyData';
import { produce } from 'immer';

export const catReducer = (state: CatDataType, action: any) => {
  switch (action.type) {
    case 'game_loop':
      return produce(state, (draftState) => {
        const cats = draftState.cats;
        const calcCats = Math.round((cats.amount + cats.perSecond) * 100) / 100;
        cats.amount = calcCats;
      });

    case 'cat_add':
      return produce(state, (draftState) => {
        const cats = draftState.cats;
        cats.amount += draftState.cats.perClick;
      });

    case 'cat_set_persecond':
      return produce(state, (draftState) => {
        const cats = draftState.cats;
        cats.perSecond = action.payload;
      });

    case 'building_buy':
      return produce(state, (draftState) => {
        const cats = draftState.cats;
        const building = draftState.buildings[action.payload];
        if (cats.amount >= building.price) {
          const calcCats = Math.round((cats.amount - building.price) * 100) / 100;
          cats.amount = calcCats;
          building.amount += 1;
          building.price = building.priceDef * Math.pow(PRICE_MULTIPLIER, building.amount);
          building.perSecond = building.perSecondDef * building.bonus * building.amount;
        }
      });

    case 'building_unlock':
      return produce(state, (draftState) => {
        const building = draftState.buildings[action.payload];
        building.unlocked = true;
      });

    case 'building_discover':
      return produce(state, (draftState) => {
        const building = draftState.buildings[action.payload];
        building.discovered = true;
      });

    case 'building_add_variable':
      return produce(state, (draftState) => {
        const building = draftState.buildings[action.payload];
        building.amount = 0;
        building.price = building.priceDef;
        building.perSecond = 0;
        building.bonus = 1;
        action.payload === 0 ? (building.unlocked = true) : (building.unlocked = false);
        building.discovered = false;
      });

    default:
      console.log('no type');
      return state;
  }
};
