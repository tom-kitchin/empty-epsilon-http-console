export function setEpsilonServerAddress (state, newAddress) {
  state.epsilonServerAddress = newAddress
}

export function addGetter (state, newGetter) {
  state.getters = {
    ...state.getters,
    [newGetter.id]: newGetter
  }
}

export function setGetterValue (state, { id, value }) {
  state.getters = {
    ...state.getters,
    [id]: {
      ...state.getters[id],
      value: value
    }
  }
}

export function resetState (state) {
  state.getters = {}
}
