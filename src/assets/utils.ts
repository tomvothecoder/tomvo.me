export const getImagePath = (type: string, filename: string) => {
  return require(`assets/${type}/${filename}`);
};
