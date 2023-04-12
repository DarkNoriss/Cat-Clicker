import { useState } from 'react';
import { PATHICONS } from '../constants';
import { CatType } from '../App';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type CatProps = {
  catData: CatType;
  setCatData: React.Dispatch<React.SetStateAction<CatType>>;
};

export const Cat: React.FC<CatProps> = ({ catData, setCatData }) => {
  const [cats, setCats] = useState<number>(catData.cats);
  const catPerClick = catData.cpc;

  useUpdateEffect(() => {
    const updatedData = { ...catData, cats };
    setCatData(updatedData);
  }, [cats]);

  const handleClick = () => {
    setCats((prevCats) => prevCats + catPerClick);
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="mb-80 text-5xl ">{`${cats}`} cats</p>
      <button className="mb-80 cursor-pointer" onClick={handleClick}>
        <img src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};