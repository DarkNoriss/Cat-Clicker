import { Props } from '../utils/types';
import { PATHICONS } from '../constants';
import '../styles/cat.scss';

export const Cat = ({ cats, addCats }: Props) => {
  const handleClick = () => {
    return addCats(cats + 1);
  };

  return (
    <div className="cat">
      <p>{`${cats}`} cats</p>
      <button onClick={handleClick}>
        <img src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};
