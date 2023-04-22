import { PRICE_MULTIPLIER } from '../constants';
import { CatDataType } from './emptyData';
import { produce } from 'immer';
import { numberRounder } from './numberConverter';

type ActionTypes =
  | { type: 'game_loop' }
  | { type: 'cat_add' }
  | { type: 'cat_set_persecond'; payload: number }
  | { type: 'building_buy'; payload: number }
  | { type: 'building_unlock'; payload: number }
  | { type: 'building_discover'; payload: number }
  | { type: 'building_add_variable'; payload: number };

export const catReducer = (state: CatDataType, action: ActionTypes) => {
  return produce(state, (draftState) => {
    const { cats, buildings } = draftState;

    switch (action.type) {
      case 'game_loop':
        cats.amount = numberRounder(cats.amount + cats.perSecond);
        break;

      case 'cat_add':
        cats.amount += cats.perClick;
        break;

      case 'cat_set_persecond':
        cats.perSecond = action.payload;
        break;

      case 'building_buy':
        const buildToBuy = buildings[action.payload];
        if (cats.amount >= buildToBuy.price) {
          cats.amount = numberRounder(cats.amount - buildToBuy.price);
          buildToBuy.amount += 1;
          buildToBuy.price = buildToBuy.priceDef * Math.pow(PRICE_MULTIPLIER, buildToBuy.amount);
          buildToBuy.perSecond = buildToBuy.perSecondDef * buildToBuy.bonus * buildToBuy.amount;
        }
        break;

      case 'building_unlock':
        const buildingUnlock = buildings[action.payload];
        buildingUnlock.unlocked = true;
        break;

      case 'building_discover':
        const buildingDiscover = buildings[action.payload];
        buildingDiscover.discovered = true;
        break;

      case 'building_add_variable':
        const buildVariable = draftState.buildings[action.payload];
        buildVariable.amount = 0;
        buildVariable.price = buildVariable.priceDef;
        buildVariable.perSecond = 0;
        buildVariable.bonus = 1;
        action.payload === 0 ? (buildVariable.unlocked = true) : (buildVariable.unlocked = false);
        buildVariable.discovered = false;
        break;

      default:
        console.log('no type');
        break;
    }
  });
};
