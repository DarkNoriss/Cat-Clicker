import { Cat } from './components/Cats';
import { Display } from './components/Display';
import { Store } from './components/Store';
import { CatGameProvider } from './context/catContext';

export const App = () => {
  return (
    <div className="w-screen h-screen flex bg-red-400 overflow-hidden">
      <CatGameProvider>
        <Cat />
        <Display />
        <Store />
      </CatGameProvider>
    </div>
  );
};
