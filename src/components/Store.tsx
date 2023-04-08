import { UpgradeList } from './UpgradeList';
import { BuildingsList } from './BuildingsList';
import { CatType } from '../App';

type StoreProps = { catData: CatType; setCatData: React.Dispatch<React.SetStateAction<CatType>> };

export const Store: React.FC<StoreProps> = ({ catData, setCatData }) => {
  return (
    <div className="w-1/5  text-center">
      <p className="m-3">Store</p>
      <UpgradeList />
      <BuildingsList catData={catData} setCatData={setCatData} />
    </div>
  );
};
