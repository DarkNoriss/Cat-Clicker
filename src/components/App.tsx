import { useEffect, useState } from 'react';
import { loadData } from '../utils/localData';
import { Header } from './Header';
import { Data } from '../utils/types';

export const App = () => {
  const [data] = useState<Data[]>(loadData());
  const [selectedCat, setSelectedCat] = useState<number>(data[0].cats);

  return (
    <>
      <Header />
      <div className="app"></div>
    </>
  );
};
