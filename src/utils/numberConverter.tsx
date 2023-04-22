export const numberConverter = (rawValue: number) => {
  let formatedValue;
  let symbol = '';

  switch (true) {
    case rawValue >= 1e12:
      formatedValue = Math.round(rawValue * 100) / 1e14;
      symbol = 'AA';
      break;

    case rawValue >= 1e9:
      formatedValue = Math.round(rawValue * 100) / 1e11;
      symbol = 'T';
      break;

    case rawValue >= 1e6:
      formatedValue = Math.round(rawValue * 100) / 1e8;
      symbol = 'M';
      break;

    case rawValue >= 1e3:
      formatedValue = Math.round(rawValue * 100) / 1e5;
      symbol = 'K';
      break;

    default:
      formatedValue = Math.round(rawValue * 100) / 100;
      break;
  }

  const rounded = Math.round(formatedValue * 1000) / 1000;
  return `${rounded}${symbol}`;
};
