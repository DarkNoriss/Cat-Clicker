import { useEffect, useState } from 'react';
import { PRICE_MULTIPLIER, PATHBUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType } from '../Buildings';

type BuildingProps = {
  building: BuildingsType;
  index: number;
  buildingList: BuildingsType[];
  setBuildings: React.Dispatch<React.SetStateAction<BuildingsType[]>>;
};

export const CreateBuilding: React.FC<BuildingProps> = ({
  building,
  index,
  buildingList,
  setBuildings,
}) => {
  const [price, setPrice] = useState<number>(building.priceDef);
  const [perSecond, setPerSecond] = useState<number>(building.perSecond ?? 0);
  const [amount, setAmount] = useState<number>(building.amount ?? 0);
  const [bonus, setBonus] = useState<number>(building.bonus ?? 1);
  const [unlocked, setUnlocked] = useState<boolean>(building.unlocked ?? false);
  const [discovered, setDiscovered] = useState<boolean>(building.discovered ?? false);

  useUpdateEffect(() => {
    calcPrice();
    calcPerSecond();
  }, [amount]);

  useUpdateEffect(() => {
    updateBuildings();
  }, [perSecond]);

  useEffect(() => {
    if (!unlocked) shouldUnlock();
    if (!discovered) shouldDiscover();
  }, [buildingList]);

  const updateBuildings = () => {
    setBuildings((prevBuildings) => {
      const newBuildings = [...prevBuildings];
      newBuildings[index] = {
        ...newBuildings[index],
        perSecond,
        amount,
        bonus,
        unlocked,
        discovered,
      };
      return newBuildings;
    });
  };

  const calcPrice = () => {
    if (amount === 0) return;
    const newPrice = building.priceDef * Math.pow(PRICE_MULTIPLIER, amount);
    const newPriceRounded = Math.round(newPrice * 100) / 100;
    setPrice(newPriceRounded);
  };

  const calcPerSecond = () => {
    if (amount === 0) return;
    const newPerSecond = building.perSecondDef * bonus * amount;
    setPerSecond(newPerSecond);
  };

  const shouldUnlock = () => {
    if (index === 0) return setUnlocked(true);
    const prevOwned = buildingList[index - 1].amount;
    if (prevOwned !== undefined && prevOwned > 0) return setUnlocked(true);
  };

  const shouldDiscover = () => {
    // to do
    // if price is > cats
  };

  const handleBuy = () => {
    setAmount((curAmo) => curAmo + 1);
  };

  const handleSell = () => {
    setAmount((curAmo) => curAmo - 1);
  };

  return (
    <>
      {unlocked && (
        <div className="h-16 flex cursor-pointer " onClick={handleBuy}>
          <img
            src={`${PATHBUILDINGS}${building.icon}`}
            className="w-16 aspect-square"
            style={discovered ? {} : { filter: 'brightness(0)' }}
          ></img>

          <div className="flex-1 flex flex-col m-2 items-start">
            <p>{building.name}</p>
            <p>{price}</p>
          </div>
          <div className="flex items-end m-2">
            <p>{amount}</p>
          </div>
        </div>
      )}
    </>
  );
};
