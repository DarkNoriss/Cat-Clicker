import { UpgradeList } from './UpgradeList';
import { BuildingsList } from './BuildingsList';
import { CatDataType } from '../utils/emptyData';

type StoreProps = {
  catData: CatDataType;
  setCatData: React.Dispatch<React.SetStateAction<CatDataType>>;
};

export const Store: React.FC<StoreProps> = ({ catData, setCatData }) => {
  return (
    <div className="w-96 text-center">
      <p className="m-3">Store</p>
      <UpgradeList />
      <BuildingsList catData={catData} setCatData={setCatData} />
    </div>
  );
};
