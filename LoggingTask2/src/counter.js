let count = 0;

const read = () => count;

const increase = () => {
  count += 1;
  return count;
};

const reset = () => {
  count = 0;
  return count;
};

module.exports = { read, increase, reset };
