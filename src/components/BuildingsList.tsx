import { useState } from 'react';
import { CatType } from '../App';
import { CreateBuilding } from './CreateBuilding';
import { BuildingsType, catBakery, catFarmer, catMiner, catPaw } from '../Buildings';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type BuildingListProps = {
  catData: CatType;
  setCatData: React.Dispatch<React.SetStateAction<CatType>>;
};

export const BuildingsList: React.FC<BuildingListProps> = ({ catData, setCatData }) => {
  const buildingsArray = [catPaw, catBakery, catFarmer, catMiner]; //
  const [buildings, setBuildings] = useState<BuildingsType[]>(catData.buildings);

  useUpdateEffect(() => {
    const missingBuilds = buildingsArray.filter(
      (newBuilds) => !buildings.some((oldBuilds) => newBuilds.name === oldBuilds.name)
    );

    setBuildings((prevBuildings) => [...prevBuildings, ...missingBuilds]);
  }, []);

  useUpdateEffect(() => {
    const updatedData = { ...catData };
    updatedData.buildings = buildings;
    setCatData(updatedData);
  }, [buildings]);

  const updateBuildings = (amount: number, index: number) => {
    setBuildings((prevBuildings) => {
      const newBuildings = [...prevBuildings];
      newBuildings[index] = { ...newBuildings[index], amount };
      return newBuildings;
    });
  };

  return (
    <div>
      <p className="m-3">Buildings</p>
      {buildings.map((value, index) => (
        <CreateBuilding
          key={index}
          building={value}
          index={index}
          updateBuildings={updateBuildings}
        />
      ))}
    </div>
  );
};
