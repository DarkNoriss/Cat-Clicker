import { PATHICONS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { numberConverter } from '../utils/numberConverter';
import { useCatGame } from '../context/catContext';

export const Cat = () => {
  const { catGame, dispatchCatGame } = useCatGame();

  useUpdateEffect(() => {
    const calculatedPerSecond = Object.values(catGame.buildings).reduce((sum, building) => {
      return sum + (building.perSecond ?? 0);
    }, 0);

    const roundedPerSecond = Math.round(calculatedPerSecond * 100) / 100;

    dispatchCatGame({
      type: 'cat_set_persecond',
      payload: roundedPerSecond,
    });
  }, [catGame.buildings]);

  const handleClick = () => {
    dispatchCatGame({
      type: 'cat_add',
    });
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="text-5xl ">{numberConverter(catGame.cats.amount)} cats</p>
      <button className="w-96 h-96 cursor-pointer" onClick={handleClick}>
        <img className="m-auto" src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};
