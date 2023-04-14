import { useEffect, useRef, useState } from 'react';
import { CatType } from '../App';
import { CreateBuilding } from './CreateBuilding';
import { BuildingsType, catBakery, catFarmer, catMiner, catPaw } from '../Buildings';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type BuildingListProps = {
  catData: CatType;
  setCatData: React.Dispatch<React.SetStateAction<CatType>>;
};

export const BuildingsList: React.FC<BuildingListProps> = ({ catData, setCatData }) => {
  const buildingsArray = [catPaw, catBakery, catFarmer, catMiner];
  const [buildings, setBuildings] = useState<BuildingsType[]>(catData.buildings);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    const missingBuilds = buildingsArray.filter(
      (newBuilds) => !buildings.some((oldBuilds) => newBuilds.name === oldBuilds.name)
    );

    setBuildings((prevBuildings) => [...prevBuildings, ...missingBuilds]);
  }, []);

  useUpdateEffect(() => {
    const updatedData = { ...catData };
    const updatedCPS = calcPerSeconds(buildings);

    updatedData.buildings = buildings;
    updatedData.cps = updatedCPS;

    setCatData(updatedData);
  }, [buildings]);

  const calcPerSeconds = (buildings: BuildingsType[]) => {
    if (buildings.length === 0) return 0;

    const newCPS = buildings.map((build) => build.perSecond ?? 0);
    const sumCPS = newCPS.reduce((sum, acc) => sum + acc);

    return sumCPS;
  };

  return (
    <div>
      <p className="m-3">Buildings</p>
      {buildings.map((value, index) => (
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
