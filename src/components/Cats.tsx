import { useState } from 'react';
import { PATHICONS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { converter } from '../utils/numberConverter';
import { CatDataType, CatsType } from '../utils/emptyData';

type CatsProps = {
  catData: CatDataType;
  setCatData: React.Dispatch<React.SetStateAction<CatDataType>>;
};

export const Cat: React.FC<CatsProps> = ({ catData, setCatData }) => {
  const [amount, setAmount] = useState<number>(catData.cats.amount);
  const [perClick, setPerClick] = useState<number>(catData.cats.perClick);
  const [perSecond, setPerSecond] = useState<number>(catData.cats.perSecond);

  useUpdateEffect(() => {
    setCatData((prev) => {
      const updatedData = { ...prev };
      updatedData.cats.amount = amount;
      return updatedData;
    });
  }, [amount]);

  useUpdateEffect(() => {
    setAmount(catData.cats.amount);
  }, [catData]);

  useUpdateEffect(() => {
    // calculate perSecond on each building and sum
    // const buildingList = catData.buildings;
    // console.log(buildingList);
  }, [catData.buildings]);

  const handleClick = () => {
    setAmount((prevCats) => prevCats + perClick);
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="text-5xl ">{converter(amount)} cats</p>
      <button className="w-96 h-96 cursor-pointer" onClick={handleClick}>
        <img className="m-auto" src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};
