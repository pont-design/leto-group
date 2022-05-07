export const getGostFromString = (inputString) => {
  let str = inputString.replace(/[a-zа-яё]/gi, '');
  str = str.replace(/[.]/gi, '')
  str = str.split(' ').join('');
  return str
}
