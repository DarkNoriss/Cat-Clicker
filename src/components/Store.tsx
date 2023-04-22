import { UpgradeList } from './UpgradeList';
import { BuildingsList } from './BuildingsList';

export const Store = () => {
  return (
    <div className="w-96 font-bold text-center bg-yellow-950">
      <p className="m-3 text-4xl text-white">Store</p>
      <UpgradeList />
      <BuildingsList />
    </div>
  );
};
