import { createContext, useEffect, useReducer, useRef } from 'react';
import { loadData, saveData } from './utils/localData';
import { Cat } from './components/Cats';
import { Display } from './components/Display';
import { Store } from './components/Store';
import { useUpdateEffect } from './utils/useUpdateEffect';
import { catReducer } from './utils/catReducer';

export const CatGameContext = createContext({});

export const App = () => {
  const [catGame, dispatchCatGame] = useReducer(catReducer, loadData());
  const callback = useRef();

  useEffect(() => {
    callback.current = () => {
      dispatchCatGame({
        type: 'game_loop',
      });
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      callback.current();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useUpdateEffect(() => saveData(catGame), [catGame]);

  return (
    <>
      <div className="w-screen h-screen flex bg-red-400 overflow-hidden">
        <CatGameContext.Provider value={{ catGame, dispatchCatGame }}>
          <Cat />
          <Display />
          <Store />
        </CatGameContext.Provider>
      </div>
    </>
  );
};
