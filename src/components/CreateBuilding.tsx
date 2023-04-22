import { useEffect, useRef } from 'react';
import { PATHBUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { converter } from '../utils/numberConverter';
import { useCatGame } from '../context/catContext';

type BuildingProps = {
  building: any;
  index: number;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, index }) => {
  const { catGame, dispatchCatGame } = useCatGame();
  const isMissingVariable = useRef(true);

  useEffect(() => {
    const addVariable = async () => {
      building.amount ??
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

    if (!building.discovered)
      if (catGame.cats.amount >= building.price)
        dispatchCatGame({
          type: 'building_discover',
          payload: index,
        });
  }, [catGame.cats]);

  useUpdateEffect(() => {
    if (isMissingVariable.current) return;

    if (!building.unlocked)
      if (catGame.buildings[index - 1].amount > 0)
        dispatchCatGame({
          type: 'building_unlock',
          payload: index,
        });
  }, [catGame.buildings]);

  return (
    <>
      {building.unlocked && (
        <div className="h-24 flex cursor-pointer text-2xl" onClick={handleClick}>
          <img
            src={`${PATHBUILDINGS}${building.icon}.webp`}
            className="w-24 aspect-square"
            style={building.discovered ? {} : { filter: 'brightness(0)' }}
          />

          <div className="flex-1 flex flex-col m-auto ml-4 items-start">
            <p className="font-bold">{building.name}</p>
            <p>{converter(building.price)}</p>
          </div>
          <div className="flex items-end m-4 text-5xl">
            <p className="font-bold">{building.amount}</p>
          </div>
        </div>
      )}
    </>
  );
};
