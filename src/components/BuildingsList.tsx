import { useState } from 'react';
import { CatType } from '../App';
import { CreateBuilding } from './CreateBuilding';
import { BuildingsType, catBakery, catPaw } from '../Buildings';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type BuildingListProps = {
  catData: CatType;
  setCatData: React.Dispatch<React.SetStateAction<CatType>>;
};

type BuildingsArray = {
  catPaw: BuildingsType;
  catBakery: BuildingsType;
  [key: string]: BuildingsType | string;
};

export const BuildingsList: React.FC<BuildingListProps> = ({ catData, setCatData }) => {
  const buildingsArray: BuildingsArray = { catPaw: catPaw, catBakery: catBakery };
  const [buildings, setBuildings] = useState<BuildingsType[]>(catData.buildings);

  useUpdateEffect(() => {
    const test = Object.keys(buildingsArray).map((newBuild) => {
      if (!Object.keys(buildings).includes(newBuild)) return newBuild;
    });
    test.forEach((element) => {
      if (element !== undefined)
        setBuildings((prevbuilds) => {
          return { ...prevbuilds, [element]: buildingsArray[element] };
        });
    });
  }, []);

  useUpdateEffect(() => {
    const updatedData = { ...catData };
    updatedData.buildings = buildings;
    setCatData(updatedData);
  }, [buildings]);

  const updateBuildings = (amount: number, name: string) => {
    const index = Object.entries(buildings).map((item) =>
      item[1].name === name ? item[0] : undefined
    );
    const indexString = index.filter((item) => item !== undefined);

    const copyBuildings = { ...buildings };
    copyBuildings[indexString].amount = amount;

    setBuildings(copyBuildings);
  };

  return (
    <div className="m-3">
      <p>Buildings</p>
      {Object.entries(buildings).map((value, key) => (
        <CreateBuilding key={key} building={value} updateBuildings={updateBuildings} />
      ))}
    </div>
  );
};
