import { useContext, useEffect, useState } from 'react';
import { PRICE_MULTIPLIER, PATHBUILDINGS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { BuildingsType } from '../Buildings';
import { converter } from '../utils/numberConverter';
import { CatDataType } from '../utils/emptyData';
import { CatGameContext } from '../App';

type BuildingProps = {
  building: any;
  index: number;
};

export const CreateBuilding: React.FC<BuildingProps> = ({ building, index }) => {
  const { catGame, dispatchCatGame } = useContext(CatGameContext);

  const handleClick = () => {
    dispatchCatGame({
      type: 'buy_building',
    });
  };

  return (
    <>
      <div className="h-24 flex cursor-pointer text-2xl" onClick={handleClick}>
        <img src={`${PATHBUILDINGS}${building.icon}`} className="w-24 aspect-square"></img>

        <div className="flex-1 flex flex-col m-auto ml-4 items-start">
          <p className="font-bold">{building.name}</p>
          {/* <p>{converter(price)}</p> */}
        </div>
        <div className="flex items-end m-4 text-5xl">
          <p className="font-bold">{building.amount}</p>
        </div>
      </div>
    </>
  );
};
// return (
//   <>
//     {unlocked && (
//       <div className="h-24 flex cursor-pointer text-2xl" onClick={handleBuy}>
//         <img
//           src={`${PATHBUILDINGS}${building.icon}`}
//           className="w-24 aspect-square"
//           style={discovered ? {} : { filter: 'brightness(0)' }}
//         ></img>

//         <div className="flex-1 flex flex-col m-auto ml-4 items-start">
//           <p className="font-bold">{building.name}</p>
//           <p>{converter(price)}</p>
//         </div>
//         <div className="flex items-end m-4 text-5xl">
//           <p className="font-bold">{amount}</p>
//         </div>
//       </div>
//     )}
//   </>
// );

// const [price, setPrice] = useState<number>(
//   building.amount
//     ? building.priceDef * Math.pow(PRICE_MULTIPLIER, building.amount)
//     : building.priceDef
// );
// const [perSecond, setPerSecond] = useState<number>(building.perSecond ?? 0);
// const [amount, setAmount] = useState<number>(building.amount ?? 0);
// const [bonus, setBonus] = useState<number>(building.bonus ?? 1);
// const [unlocked, setUnlocked] = useState<boolean>(building.unlocked ?? false);
// const [discovered, setDiscovered] = useState<boolean>(building.discovered ?? false);

// useEffect(() => {
//   building.price ?? building.priceDef;
// }, []);

// useUpdateEffect(() => {
//   calcPrice();
// }, [building.amount]);

// useUpdateEffect(() => {
//   const updatedBuilding = { ...building, amount, perSecond, unlocked, discovered };
//   setBuildings((prev) => {
//     const updatedList = { ...prev };
//     updatedList[index] = updatedBuilding;
//     return updatedList;
//   });
// }, [perSecond]);

// useEffect(() => {
//   if (!unlocked) shouldUnlock();
//   if (!discovered) shouldDiscover();
// }, [catData]);

// const calcPrice = () => {
//   if (building.amount === 0) return building.priceDef;
//   const newPrice = building.priceDef * Math.pow(PRICE_MULTIPLIER, building.amount);
//   setPrice(newPrice);
// };

// const calcPerSecond = () => {
//   if (amount === 0) return;
//   const newPerSecond = building.perSecondDef * bonus * amount;
//   setPerSecond(newPerSecond);
// };

// const shouldUnlock = () => {
//   if (index === 0) return setUnlocked(true);
//   const prevOwned = buildingList[index - 1].amount;
//   if (prevOwned !== undefined && prevOwned > 0) return setUnlocked(true);
// };

// const shouldDiscover = () => {
//   if (catData.cats.amount >= price) setDiscovered(true);
// };

// const handleBuy = () => {
//   if (catData.cats.amount <= price) return;
//   const newAmount = catData.cats.amount - price;
//   setCatData((prev) => {
//     const updatedCatData = { ...prev };
//     updatedCatData.cats.amount = newAmount;
//     return updatedCatData;
//   });
//   setAmount((curAmo) => curAmo + 1);
// };

// const handleSell = () => {
//   setAmount((curAmo) => curAmo - 1);
// };
