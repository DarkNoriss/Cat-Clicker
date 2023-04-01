import { Dispatch, SetStateAction } from 'react';

export type Data = {
  cats: number;
};

export type Props = Data & {
  addCats: Dispatch<SetStateAction<number>>;
};
