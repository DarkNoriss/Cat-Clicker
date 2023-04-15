import { useState } from 'react';
import { loadData, saveData } from './utils/localData';
import { Cat } from './components/Cats';
import { Display } from './components/Display';
import { Store } from './components/Store';
import { useUpdateEffect } from './utils/useUpdateEffect';
import { CatDataType } from './utils/emptyData';

export const App = () => {
  const [catData, setCatData] = useState<CatDataType>(() => loadData());

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
