import { CreateBuilding } from './CreateBuilding';
import { useCatGame } from '../context/catContext';

export const BuildingsList = () => {
  const { catGame, dispatchCatGame } = useCatGame();

  return (
    <div>
      <p className="m-3">Buildings</p>
      <div className="flex items-center text-xl bg-yellow-950 text-white">
        <div className="flex-1 flex flex-col text-base">
          <button onClick={() => console.log('BUY')}>BUY</button>
          <button onClick={() => console.log('SELL')}>SELL</button>
        </div>
        <div className="flex-1">
          <button onClick={() => console.log('1')}>1</button>
        </div>
        <div className="flex-1">
          <button onClick={() => console.log('10')}>10</button>
        </div>
        <div className="flex-1">
          <button onClick={() => console.log('100')}>100</button>
        </div>
        <div className="flex-1">
          <button onClick={() => console.log('ALL')}>ALL</button>
        </div>
      </div>
      <div className="overflow-y-auto bg-slate-700">
        {Object.values(catGame.buildings).map((value, index) => (
          <CreateBuilding key={index} building={value} index={index} />
        ))}
      </div>
    </div>
  );
};
