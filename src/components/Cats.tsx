import { useContext, useEffect, useState } from 'react';
import { PATHICONS } from '../constants';
import { useUpdateEffect } from '../utils/useUpdateEffect';
import { converter } from '../utils/numberConverter';
import { CatDataType } from '../utils/emptyData';
import { CatGameContext } from '../App';

export const Cat = () => {
  const { catGame, dispatchCatGame } = useContext(CatGameContext);

  const handleClick = () => {
    dispatchCatGame({
      type: 'add_cat',
    });
  };

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p className="text-5xl ">{converter(catGame.cats.amount)} cats</p>
      <button className="w-96 h-96 cursor-pointer" onClick={handleClick}>
        <img className="m-auto" src={`${PATHICONS}cat.png`} />
      </button>
    </div>
  );
};

// useEffect(() => {
//   const intervalId = setInterval(() => {
//     setAmount((prevScore) => prevScore + perSecond);
//   }, 1000);
//   return () => clearInterval(intervalId);
// });

// useUpdateEffect(() => {
//   setPerSecond(() => {
//     return Object.values(catData.buildings).reduce((sum, building) => {
//       return sum + (building.perSecond ?? 0);
//     }, 0);
//   });
// }, [catData.buildings]);
