import { useEffect, useState } from 'react';
import { PRICE_MULTIPLIER, PATHBUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType } from '../Buildings';
import { CatType } from '../App';
import { converter } from '../utils/numberConverter';

type BuildingProps = {
  building: BuildingsType;
  index: number;
  buildingList: BuildingsType[];
  setBuildings: React.Dispatch<React.SetStateAction<BuildingsType[]>>;
  catData: CatType;
  setCatData: React.Dispatch<React.SetStateAction<CatType>>;
};

export const CreateBuilding: React.FC<BuildingProps> = ({
  building,
  index,
  buildingList,
  setBuildings,
  catData,
  setCatData,
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
  }, [buildingList, catData]);

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
    setPrice(newPrice);
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
    if (catData.cats >= price) setDiscovered(true);
  };

  const handleBuy = () => {
    if (catData.cats <= price) return;

    setCatData((prev) => {
      const updatedCatData = { ...prev };
      updatedCatData.cats -= price;
      return updatedCatData;
    });
    setAmount((curAmo) => curAmo + 1);
  };

  const handleSell = () => {
    setAmount((curAmo) => curAmo - 1);
  };

  return (
    <>
      {unlocked && (
        <div className="h-24 flex cursor-pointer text-2xl" onClick={handleBuy}>
          <img
            src={`${PATHBUILDINGS}${building.icon}`}
            className="w-24 aspect-square"
            style={discovered ? {} : { filter: 'brightness(0)' }}
          ></img>

          <div className="flex-1 flex flex-col m-auto ml-4 items-start">
            <p className="font-bold">{building.name}</p>
            <p>{converter(price)}</p>
          </div>
          <div className="flex items-end m-4 text-5xl">
            <p className="font-bold">{amount}</p>
          </div>
        </div>
      )}
    </>
  );
};
