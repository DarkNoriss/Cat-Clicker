import { useEffect, useState } from 'react';
import { PRICE_MULTIPLIER, PATHBUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType } from '../Buildings';

type BuildingProps = {
  building: BuildingsType;
  index: number;
  updateBuildings: (amount: number, index: number) => void;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, index, updateBuildings }) => {
  const [price, setPrice] = useState<number>(building.priceDef);
  const [perSecond, setPerSecond] = useState<number>(building.perSecondDef);
  const [amount, setAmount] = useState<number>(building.amount);

  const imgsrc = `${PATHBUILDINGS}`;

  useUpdateEffect(() => {
    updateBuildings(amount, index);
    calcPrice();
    calcPerSecond();
  }, [amount]);

  const calcPrice = () => {
    if (amount === 0) return;
    const newPrice = building.priceDef * Math.pow(PRICE_MULTIPLIER, amount);
    setPrice(newPrice);
  };
  const calcPerSecond = () => {
    if (amount === 0) return;
    const newPerSecond = building.perSecondDef * amount;
    setPerSecond(newPerSecond);
  };

  const handleBuy = () => {
    setAmount((curAmo) => curAmo + 1);
  };

  return (
    <div className="h-16 flex cursor-pointer " onClick={handleBuy}>
      <img src={`${imgsrc}${building.icon}`} className="w-16 aspect-square"></img>

      <div className="flex-1 flex flex-col m-2 items-start">
        <p>{building.name}</p>
        <p>{Math.round(price * 100) / 100}</p>
      </div>
      <div className="flex items-end m-2">
        <p>{amount}</p>
      </div>
    </div>
  );
};
