export const clone = <T,>(data: T) => {
  return JSON.parse(JSON.stringify(data));
};