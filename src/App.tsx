import { useState } from 'react';
import { loadData, saveData } from './utils/localData';
import { Data } from './utils/types';
import { Cat } from './components/Cat';
import { Display } from './components/Display';
import { Store } from './components/Store';
import { useUpdateEffect } from './utils/useUpdateEffect';

export const App = () => {
  const [data, setData] = useState<Data[]>(loadData());
  const [cats, setCats] = useState<number>(data[0].cats);

  useUpdateEffect(() => {
    saveData(data);
  }, [data]);

  useUpdateEffect(() => {
    const updatedData = [...data];
    updatedData[0].cats = cats;
    setData(updatedData);
  }, [cats]);

  return (
    <>
      <div className="w-screen h-screen bg-red-600">
        <Cat cats={cats} addCats={setCats} />
        <Display />
        <Store />
      </div>
    </>
  );
};
