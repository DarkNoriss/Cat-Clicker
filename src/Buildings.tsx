export type BuildingsType = {
  name: string;
  desc: string;
  icon: string;
  priceDef: number;
  perSecondDef: number;
  amount?: number;
  perSecond?: number;
  bonus?: number;
  unlocked?: boolean;
  discovered?: boolean;
};

export const catPaw = {
  name: 'Paw',
  desc: 'meow meow',
  icon: 'catPaw.png',
  priceDef: 15,
  perSecondDef: 0.2,
};

export const catBakery = {
  name: 'Bakery',
  desc: 'meow meow',
  icon: 'catBakery.png',
  priceDef: 100,
  perSecondDef: 1,
};

export const catFarmer = {
  name: 'Farmer',
  desc: 'meow meow',
  icon: 'catFarmer.png',
  priceDef: 1100,
  perSecondDef: 8,
};

export const catMiner = {
  name: 'Miner',
  desc: 'meow meow',
  icon: 'catMiner.png',
  priceDef: 12000,
  perSecondDef: 47,
};

//   catWorket: 0,
//   catBanker: 0,
//   catTemple: 0,
//   catWizard: 0,
//   catAstronaut: 0,
//   catAlchemy: 0,
//   catPortal: 0,
//   catTimeMachine: 0,
//   catAntimatterCondenser: 0,
//   catPrism: 0,
//   catChancemaker: 0,
//   catJavascriptConsole: 0,
//   catIdleverse: 0,
//   catCortexBaker: 0,
