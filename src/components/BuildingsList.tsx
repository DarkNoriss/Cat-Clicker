import { CreateBuilding } from './CreateBuilding';
import { useCatGame } from '../context/catContext';

export const BuildingsList = () => {
  const { catGame, dispatchCatGame } = useCatGame();
  const { buildings } = catGame;

  return (
    <div>
      <p className="m-3">Buildings</p>
      <div className="flex items-center text-2xl bg-yellow-950 text-white">
        <div className="flex-1 flex flex-col text-base space-y-1">
          <button className="w-full" onClick={() => console.log('BUY')}>
            BUY
          </button>
          <button className="w-full" onClick={() => console.log('SELL')}>
            SELL
          </button>
        </div>
        <div className="flex-1">
          <button className="w-full" onClick={() => console.log('1')}>
            1
          </button>
        </div>
        <div className="flex-1">
          <button className="w-full" onClick={() => console.log('10')}>
            10
          </button>
        </div>
        <div className="flex-1">
          <button className="w-full" onClick={() => console.log('100')}>
            100
          </button>
        </div>
        <div className="flex-1">
          <button className="w-full" onClick={() => console.log('ALL')}>
            ALL
          </button>
        </div>
      </div>
      <div className="overflow-y-auto bg-slate-700">
        {Object.values(buildings).map((value, index) => (
          <CreateBuilding key={index} building={value} index={index} />
        ))}
      </div>
    </div>
  );
};
