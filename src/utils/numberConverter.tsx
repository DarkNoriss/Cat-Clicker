export const numberConverter = (rawValue: number) => {
  const conversions = [
    { limit: 1e12, divisor: 1e14, symbol: 'AA' },
    { limit: 1e9, divisor: 1e11, symbol: 'T' },
    { limit: 1e6, divisor: 1e8, symbol: 'M' },
    { limit: 1e3, divisor: 1e5, symbol: 'K' },
  ];

  const { divisor, symbol } = conversions.find(({ limit }) => rawValue >= limit) || {
    divisor: 100,
    symbol: '',
  };
  const formatedValue = Math.round(rawValue * 100) / divisor;

  return `${numberRounder(formatedValue)}${symbol}`;
};

export const numberRounder = (rawValue: number) => {
  return Math.round(rawValue * 1000) / 1000;
};
