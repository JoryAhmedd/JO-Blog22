export const isEmpty = (value) => value.trim().length === 0;
export const isEmail = (value) => value.trim().includes("@");
export const minLength = (value, min = 8) => value.trim().length >= min;