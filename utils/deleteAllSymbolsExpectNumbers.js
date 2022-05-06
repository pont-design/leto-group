export const deleteAllSymbolsExpectNumbers = (str) => {
  return String(str).replace(/[\D]/g, "");
}
