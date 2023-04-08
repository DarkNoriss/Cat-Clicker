import { useState } from 'react';
import { loadData, saveData } from './utils/localData';
import { Cat } from './components/Cat';
import { Display } from './components/Display';
import { Store } from './components/Store';
import { useUpdateEffect } from './utils/useUpdateEffect';
import { BuildingsType } from './Buildings';

export type CatType = {
  [key: string]: number | string | BuildingsType[];
  cats: number;
  cpc: number;
  cps: number;
  buildings: BuildingsType[];
};

export const App = () => {
  const [catData, setCatData] = useState<CatType>(() => loadData());

  useUpdateEffect(() => saveData(catData), [catData]);

  return (
    <>
      <div className="w-screen h-screen flex bg-red-400">
        <Cat catData={catData} setCatData={setCatData} />
        <Display />
        <Store catData={catData} setCatData={setCatData} />
      </div>
    </>
  );
};
