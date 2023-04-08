import { useEffect, useState } from 'react';
import { PRICE_MULTIPLIER } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType } from '../Buildings';

type BuildingProps = {
  building: [string, BuildingsType];
  updateBuildings: (amount: number, name: string) => void;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, updateBuildings }) => {
  const [price, setPrice] = useState<number>(building[1].priceDef);
  const [perSecond, setPerSecond] = useState<number>(building[1].perSecondDef);
  const [amount, setAmount] = useState<number>(building[1].amount);

  useUpdateEffect(() => {
    updateBuildings(amount, building[1].name);
  }, [amount]);

  // const calcPrice = () => {
  //   if (amount === 0) return;
  //   const newPrice = building.priceDef * Math.pow(PRICE_MULTIPLIER, amount);
  //   setPrice(newPrice);
  // };
  // const calcPerSecond = () => {
  //   if (amount === 0) return;
  //   const newPerSecond = building.perSecondDef * amount;
  //   setPerSecond(newPerSecond);
  // };

  const handleBuy = () => {
    setAmount((curAmo) => curAmo + 1);

    // calcPrice();
    // calcPerSecond();

    // const update = { ...building, amount };
    // updateBuildings(update);
  };

  return (
    <div className="h-16 flex cursor-pointer " onClick={handleBuy}>
      <div>
        <img className="w-16 aspect-square"></img>
      </div>
      <div className="flex-1 flex flex-col m-2 items-start">
        <p>{building[1].name}</p>
        <p>{Math.round(price * 100) / 100}</p>
      </div>
      <div className="flex items-end m-2">
        <p>{amount}</p>
      </div>
    </div>
  );
};
