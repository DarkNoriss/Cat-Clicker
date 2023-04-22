import { useContext, useEffect, useRef } from 'react';
import { PATHBUILDINGS as PATH_BUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { numberConverter } from '../utils/numberConverter';
import { CatGameContext } from '../App';

type BuildingProps = {
  building: any;
  index: number;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, index }) => {
  const { catGame, dispatchCatGame } = useContext(CatGameContext);
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
        <button className="h-24 w-full flex items-center text-2xl " onClick={handleClick}>
          <img
            src={`${PATH_BUILDINGS}${building.icon}.webp`}
            className={`w-24 aspect-square ${building.discovered ? '' : 'brightness-0'} `}
          />

          <div className="flex-1 flex flex-col m-auto ml-4 items-start">
            <p className="text-4xl text-white">{building.discovered ? building.name : '???'}</p>
            <p
              className={`${
                catGame.cats.amount >= building.price ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {numberConverter(building.price)}
            </p>
          </div>
          <div className="flex items-end mr-2 text-7xl">
            <p className="">{building.amount}</p>
          </div>
        </button>
      )}
    </>
  );
};
