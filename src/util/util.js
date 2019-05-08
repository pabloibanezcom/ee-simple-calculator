export const isNumber = (val) => {
  return !isNaN(parseInt(val, 10)) ? true : false;
}