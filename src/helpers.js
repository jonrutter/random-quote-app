export const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomItem = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
