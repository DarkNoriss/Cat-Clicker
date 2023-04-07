import { Props } from '../utils/types';
import { PATHICONS } from '../constants';

export const Cat = ({ cats, addCats }: Props) => {
  const handleClick = () => {
    return addCats(cats + 1);
  };

  return (
    <div>
      <p>{`${cats}`} cats</p>
      <button className="" onClick={handleClick}>
        <img src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};
