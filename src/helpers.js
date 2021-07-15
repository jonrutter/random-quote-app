const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomItem = (list) => {
  return list[randomNum(0, list.length)];
};
