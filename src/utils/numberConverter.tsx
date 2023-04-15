export const converter = (value: number) => {
  const updatedValue = Math.round(value * 100) / 100;
  return `${updatedValue}`;
};
