// Vite: use glob import for dynamic asset paths (no require() in ESM)
const assetModules = import.meta.glob<string>('./*/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

export const getImagePath = (type: string, filename: string): string => {
  const key = `./${type}/${filename}`;
  return (assetModules[key] as string) ?? '';
};
