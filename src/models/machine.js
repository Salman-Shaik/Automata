const DFA = require('./dfa');

const getMachine = {
  'dfa': tuple => new DFA(tuple),
}

const create = (type, tuple) => getMachine[type](tuple);

module.exports = { create };
