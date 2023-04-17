import { UpgradeList } from './UpgradeList';
import { BuildingsList } from './BuildingsList';
import { CatDataType } from '../utils/emptyData';

export const Store = () => {
  return (
    <div className="w-96 text-center">
      <p className="m-3">Store</p>
      <UpgradeList />
      <BuildingsList />
    </div>
  );
};
