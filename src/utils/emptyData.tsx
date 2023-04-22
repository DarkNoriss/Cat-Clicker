export type CatsType = {
  amount: number;
  perSecond: number;
  perClick: number;
};

export type BuildingsType = {
  name: string;
  desc: string;
  icon: string;
  priceDef: number;
  perSecondDef: number;
  amount: number;
  price: number;
  perSecond: number;
  bonus: number;
  unlocked: boolean;
  discovered: boolean;
};

export type CatDataType = {
  cats: CatsType;
  upgrades: any;
  buildings: BuildingsType[];
};

export const getInitialData = (): Omit<CatDataType, 'buildings'> & {
  buildings: Partial<BuildingsType>[];
} => {
  return {
    cats: {
      amount: 0,
      perSecond: 0,
      perClick: 1,
    },
    upgrades: {},
    buildings: [
      {
        name: 'Paw',
        desc: 'meow meow meow meow',
        icon: 'catPaw',
        priceDef: 15,
        perSecondDef: 0.2,
      },
      {
        name: 'Bakery',
        desc: 'meow meow',
        icon: 'catBakery',
        priceDef: 100,
        perSecondDef: 1,
      },
      {
        name: 'Farmer',
        desc: 'meow meow',
        icon: 'catFarmer',
        priceDef: 1100,
        perSecondDef: 8,
      },
      {
        name: 'Miner',
        desc: 'meow meow',
        icon: 'catMiner',
        priceDef: 12000,
        perSecondDef: 47,
      },

      {
        name: 'Worker',
        desc: 'meow meow',
        icon: 'catWorker',
        priceDef: 130_000,
        perSecondDef: 260,
      },
      {
        name: 'Banker',
        desc: 'meow meow',
        icon: 'catBanker',
        priceDef: 1_400_000,
        perSecondDef: 1_400,
      },

      {
        name: 'Temple',
        desc: 'meow meow',
        icon: 'catTemple',
        priceDef: 20_000_000,
        perSecondDef: 7_800,
      },
      {
        name: 'Wizard',
        desc: 'meow meow',
        icon: 'catWizard',
        priceDef: 330_000_000,
        perSecondDef: 44_000,
      },
      {
        name: 'Astronaut',
        desc: 'meow meow',
        icon: 'catAstronaut',
        priceDef: 5_100_000_000,
        perSecondDef: 260_000,
      },
      {
        name: 'Alchemic',
        desc: 'meow meow',
        icon: 'catAlchemic',
        priceDef: 75_000_000_000,
        perSecondDef: 1_600_000,
      },
      {
        name: 'Portal',
        desc: 'meow meow',
        icon: 'catPortal',
        priceDef: 1_000_000_000_000,
        perSecondDef: 10_000_000,
      },
      {
        name: 'Time Machine',
        desc: 'meow meow',
        icon: 'catTimeMachine',
        priceDef: 14_000_000_000_000,
        perSecondDef: 65_000_000,
      },
      {
        name: 'Antimatter Condenser',
        desc: 'meow meow',
        icon: 'catAntimatterCondenser',
        priceDef: 170_000_000_000_000,
        perSecondDef: 430_000_000,
      },
      {
        name: 'Prism',
        desc: 'meow meow',
        icon: 'catPrism',
        priceDef: 2_100_000_000_000_000,
        perSecondDef: 2_900_000_000,
      },
      // {
      //   name: 'Chancemaker',
      //   desc: 'meow meow',
      //   icon: 'catChancemaker',
      //   priceDef: 26_000_000_000_000_000n,
      //   perSecondDef: 21_000_000_000n,
      // },
      // {
      //   name: 'Fractal Engine',
      //   desc: 'meow meow',
      //   icon: 'catFractalEngine',
      //   priceDef: 310_000_000_000_000_000n,
      //   perSecondDef: 150_000_000_000n,
      // },
      // {
      //   name: 'Javascript Console',
      //   desc: 'meow meow',
      //   icon: 'catJavascriptConsole',
      //   priceDef: 71_000_000_000_000_000_000n,
      //   perSecondDef: 1_100_000_000_000n,
      // },
      // {
      //   name: 'Idleverse',
      //   desc: 'meow meow',
      //   icon: 'catIdleverse',
      //   priceDef: 12_000_000_000_000_000_000_000n,
      //   perSecondDef: 8_300_000_000_000n,
      // },
      // {
      //   name: 'Cortex Baker',
      //   desc: 'meow meow',
      //   icon: 'catCortexBaker',
      //   priceDef: 1_900_000_000_000_000_000_000_000n,
      //   perSecondDef: 64_000_000_000_000n,
      // },
    ],
  };
};
