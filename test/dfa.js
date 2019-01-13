const tests = require('./foo');
const assert = require('chai').assert;
const machine = require('../src/models/machine');

const runTestCases = (cases, machine, assertMethod) => {
  cases.forEach(inputString => {
    it(`with input ${inputString}`, () => {
      assertMethod(machine.doesAccept(inputString));
    })
  })
}

describe('DFA', () => {
  tests.forEach(({ type, name, pass_cases, fail_cases, tuple }) => {
    if (type == 'dfa') {
      describe(name, () => {
        const DFAMachine = machine.create('dfa', tuple);
        runTestCases(pass_cases, DFAMachine, assert.isTrue);
        runTestCases(fail_cases, DFAMachine, assert.isFalse);
      })
    }
  });
});
