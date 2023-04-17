import { Dispatch, createContext, useReducer, useState } from 'react';
import { loadData, saveData } from './utils/localData';
import { Cat } from './components/Cats';
import { Display } from './components/Display';
import { Store } from './components/Store';
import { useUpdateEffect } from './utils/useUpdateEffect';
import { CatDataType, CatsType } from './utils/emptyData';
import { catReducer } from './utils/catReducer';

export const CatGameContext = createContext({});

export const App = () => {
  const [catGame, dispatchCatGame] = useReducer(catReducer, loadData());

  useUpdateEffect(() => saveData(catGame), [catGame]);

  return (
    <>
      <div className="w-screen h-screen flex bg-red-400">
        <CatGameContext.Provider value={{ catGame, dispatchCatGame }}>
          <Cat />
          <Display />
          <Store />
        </CatGameContext.Provider>
      </div>
    </>
  );
};
