const t2n = require('text-to-number');

const toI = v => (typeof v === 'string' ? t2n(v) : v);

const create = fn =>
  function aux(total) {
    const totalI = toI(total);
    return Object.defineProperty(n => aux(fn(totalI, toI(n))), 'value', {
      get: () => totalI
    });
  };

module.exports = {
  add: create((a, b) => a + b),
  subtract: create((a, b) => a - b),
  multiply: create((a, b) => a * b),
  divide: create((a, b) => a / b)
};
