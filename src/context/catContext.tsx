import { ReactNode, createContext, useContext, useEffect, useReducer, useRef } from 'react';
import { CatDataType } from '../utils/emptyData';
import { catReducer } from '../utils/catReducer';
import { loadData, saveData } from '../utils/localData';
import { useUpdateEffect } from '../utils/useUpdateEffect';

type CatGameContextType = { catGame: CatDataType; dispatchCatGame: React.Dispatch<any> };

const CatGameContext = createContext<CatGameContextType | null>(null);

export const useCatGame = () => {
  const context = useContext(CatGameContext);
  if (!context) {
    throw new Error('useCatGame must be used within a CatGameProvider');
  }
  return context;
};

export const CatGameProvider = ({ children }: { children: ReactNode }) => {
  const [catGame, dispatchCatGame] = useReducer(catReducer, loadData());

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatchCatGame({
        type: 'game_loop',
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useUpdateEffect(() => saveData(catGame), [catGame]);

  return (
    <CatGameContext.Provider value={{ catGame, dispatchCatGame }}>
      {children}
    </CatGameContext.Provider>
  );
};
