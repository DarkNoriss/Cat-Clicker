import { useState } from 'react';
import { CreateBuilding } from './CreateBuilding';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType, CatDataType } from '../utils/emptyData';

type BuildingListProps = {
  catData: CatDataType;
  setCatData: React.Dispatch<React.SetStateAction<CatDataType>>;
};

export const BuildingsList: React.FC<BuildingListProps> = ({ catData, setCatData }) => {
  const [buildings, setBuildings] = useState<BuildingsType[]>(catData.buildings);

  useUpdateEffect(() => {
    const updatedData = { ...catData, buildings };
    setCatData(updatedData);
  }, [buildings]);

  return (
    <div>
      <p className="m-3">Buildings</p>
      {Object.values(buildings).map((value, index) => (
        <CreateBuilding
          key={index}
          building={value}
          index={index}
          buildingList={buildings}
          setBuildings={setBuildings}
          catData={catData}
          setCatData={setCatData}
        />
      ))}
    </div>
  );
};
