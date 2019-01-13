class DFA {
  constructor({ delta, start_state, final_states }) {
    this.delta = delta;
    this.startState = start_state;
    this.finalStates = final_states;
  }

  doesAccept(inputString) {
    let state = this.startState;
    inputString.split('').forEach(value => state = this.delta[state][value]);
    return this.finalStates.includes(state);
  }
}

module.exports = DFA;
