import { useEffect, useState } from 'react';
import { PATHICONS } from '../constants';
import { CatType } from '../App';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { converter } from '../utils/numberConverter';

type CatProps = {
  catData: CatType;
  setCatData: React.Dispatch<React.SetStateAction<CatType>>;
};

export const Cat: React.FC<CatProps> = ({ catData, setCatData }) => {
  const [cats, setCats] = useState<number>(catData.cats);
  const [catPerClick, setCatPerClick] = useState<number>(catData.cpc);
  const [catPerSecond, setCatPerSecond] = useState<number>(catData.cps);

  useEffect(() => {
    setCats(catData.cats);
    setCatPerClick(catData.cpc);
    setCatPerSecond(catData.cps);
  }, [catData]);

  useUpdateEffect(() => {
    const updatedData = { ...catData, cats };
    setCatData(updatedData);
  }, [cats]);

  const handleClick = () => {
    setCats((prevCats) => prevCats + catPerClick);
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="mb-80 text-5xl ">{converter(cats)} cats</p>
      <button className="mb-80 cursor-pointer" onClick={handleClick}>
        <img src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};
