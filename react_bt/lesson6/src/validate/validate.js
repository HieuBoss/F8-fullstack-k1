export const validateForm = (value) => {
  const regex = /^[0-9][0-9]?$/;
  const check = regex.test(value);
  return check;
};
