import { CreateBuilding } from './CreateBuilding';
import { useCatGame } from '../context/catContext';

export const BuildingsList = () => {
  const { catGame, dispatchCatGame } = useCatGame();

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
