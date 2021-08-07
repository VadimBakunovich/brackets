module.exports = function check(str, config) {
  for (let i = str.length - 1; i >= 0; i--) {
    for (let item of config) str.includes(item.join('')) ? str = str.replace(item.join(''), '') : str;
    if (!str) break;
  }
  return (!str);
}