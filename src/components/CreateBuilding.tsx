import { useState } from 'react';
import { PRICE_MULTIPLIER, PATHBUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType } from '../Buildings';

type BuildingProps = {
  building: BuildingsType;
  index: number;
  setBuildings: React.Dispatch<React.SetStateAction<BuildingsType[]>>;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, index, setBuildings }) => {
  const [price, setPrice] = useState<number>(building.priceDef);
  const [amount, setAmount] = useState<number>(building.amount);
  const [perSecond, setPerSecond] = useState<number>(0);

  useUpdateEffect(() => {
    calcPerSecond();
    calcPrice();
  }, [amount]);

  useUpdateEffect(() => {
    updateBuildings();
  }, [perSecond]);

  const updateBuildings = () => {
    setBuildings((prevBuildings) => {
      const newBuildings = [...prevBuildings];
      newBuildings[index] = { ...newBuildings[index], amount, perSecond };
      return newBuildings;
    });
  };

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
      <img src={`${PATHBUILDINGS}${building.icon}`} className="w-16 aspect-square"></img>

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
