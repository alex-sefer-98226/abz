export const isValidEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);
export const isValidName = (name) => !/[0-9]/.test(name) && name.length > 2;
export const isValidTel = (tel) =>
  /^((8|\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel);
