import { useContext, useState } from 'react';
import { CreateBuilding } from './CreateBuilding';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType, CatDataType } from '../utils/emptyData';
import { CatGameContext } from '../App';

export const BuildingsList = () => {
  const { catGame, dispatchCatGame } = useContext(CatGameContext);
  // const [buildings, setBuildings] = useState<BuildingsType[]>(catData.buildings);

  // useUpdateEffect(() => {
  //   const updatedData = { ...catData, buildings };
  //   setCatData(updatedData);
  // }, [buildings]);

  return (
    <div>
      <p className="m-3">Buildings</p>
      <div></div>
      {Object.values(catGame.buildings).map((value, index) => (
        <CreateBuilding key={index} building={value} index={index} />
      ))}
    </div>
  );
};

// Object.values(buildings).map((value, index) => (
//   <CreateBuilding
//     key={index}
//     building={value}
//     index={index}
//     buildingList={buildings}
//     setBuildings={setBuildings}
//     catData={catData}
//     setCatData={setCatData}
//   />
// ));
