import { PATH_ICONS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { numberConverter, numberRounder } from '../utils/numberConverter';
import { useCatGame } from '../context/catContext';

export const Cat = () => {
  const { catGame, dispatchCatGame } = useCatGame();
  const { cats, buildings } = catGame;

  useUpdateEffect(() => {
    const calculatedPerSecond = Object.values(buildings).reduce((sum, building) => {
      return sum + (building.perSecond ?? 0);
    }, 0);

    const roundedPerSecond = numberRounder(calculatedPerSecond);

    dispatchCatGame({
      type: 'cat_set_persecond',
      payload: roundedPerSecond,
    });
  }, [buildings]);

  const handleClick = () => {
    dispatchCatGame({
      type: 'cat_add',
    });
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="text-5xl ">{numberConverter(cats.amount)} cats</p>
      <button className="w-96 h-96" onClick={handleClick}>
        <img className="m-auto" src={`${PATH_ICONS}cat.png`} />
      </button>
    </div>
  );
};
