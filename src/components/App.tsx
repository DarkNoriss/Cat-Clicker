import { useState } from 'react';
import { loadData, saveData } from '../utils/localData';
import { Header } from './Header';
import { Data } from '../utils/types';
import { Cat } from './Cat';
import { Display } from './Display';
import { Store } from './Store';
import '../styles/app.scss';
import { useUpdateEffect } from '../utils/useUpdateEffect';

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
      <Header />
      <div className="app">
        <Cat cats={cats} addCats={setCats} />
        <Display />
        <Store />
      </div>
    </>
  );
};
