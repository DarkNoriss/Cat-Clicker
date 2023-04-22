import { useEffect, useRef } from 'react';
import { PATH_BUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { numberConverter } from '../utils/numberConverter';
import { useCatGame } from '../context/catContext';

type BuildingProps = {
  building: any;
  index: number;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, index }) => {
  const { catGame, dispatchCatGame } = useCatGame();
  const { unlocked, icon, discovered, name, price, amount } = building;
  const { cats, buildings } = catGame;

  const isMissingVariable = useRef(true);

  useEffect(() => {
    const addVariable = async () => {
      amount ??
        (await dispatchCatGame({
          type: 'building_add_variable',
          payload: index,
        }));
      isMissingVariable.current = false;
    };
    addVariable();
  }, []);

  const handleClick = () => {
    dispatchCatGame({
      type: 'building_buy',
      payload: index,
    });
  };

  useUpdateEffect(() => {
    if (isMissingVariable.current) return;

    if (!discovered)
      if (cats.amount >= price)
        dispatchCatGame({
          type: 'building_discover',
          payload: index,
        });
  }, [cats]);

  useUpdateEffect(() => {
    if (isMissingVariable.current) return;

    if (!unlocked)
      if (buildings[index - 1].amount > 0)
        dispatchCatGame({
          type: 'building_unlock',
          payload: index,
        });
  }, [buildings]);

  return (
    <>
      {unlocked && (
        <button className="h-24 w-full flex items-center text-2xl " onClick={handleClick}>
          <img
            src={`${PATH_BUILDINGS}${icon}.webp`}
            className={`w-24 aspect-square ${discovered ? '' : 'brightness-0'} `}
          />

          <div className="flex-1 flex flex-col m-auto ml-4 items-start">
            <p className="text-4xl text-white">{discovered ? name : '???'}</p>
            <p className={`${catGame.cats.amount >= price ? 'text-green-600' : 'text-red-600'}`}>
              {numberConverter(price)}
            </p>
          </div>
          <div className="flex items-end mr-2 text-7xl">
            <p className="">{amount}</p>
          </div>
        </button>
      )}
    </>
  );
};
