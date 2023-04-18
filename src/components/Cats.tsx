import { useContext } from 'react';
import { PATHICONS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { converter } from '../utils/numberConverter';
import { CatGameContext } from '../App';

export const Cat = () => {
  const { catGame, dispatchCatGame } = useContext(CatGameContext);

  useUpdateEffect(() => {
    const calculatedPerSecond = Object.values(catGame.buildings).reduce((sum, building) => {
      return sum + (building.perSecond ?? 0);
    }, 0);

    dispatchCatGame({
      type: 'cat_set_persecond',
      payload: calculatedPerSecond,
    });
  }, [catGame.buildings]);

  const handleClick = () => {
    dispatchCatGame({
      type: 'cat_add',
    });
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="text-5xl ">{converter(catGame.cats.amount)} cats</p>
      <button className="w-96 h-96 cursor-pointer" onClick={handleClick}>
        <img className="m-auto" src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};
