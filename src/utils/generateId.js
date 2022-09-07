export const generateId = () => {
  let id = Math.random().toString(16).slice(2);
  return id;
};
