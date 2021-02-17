module.exports = function reverse (n) {
  return n
      .toString()
      .replace('-', '')
      .split('')
      .reverse()
      .join('')
}

