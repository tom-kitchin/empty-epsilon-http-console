export function setEpsilonServerAddress (state, newAddress) {
  state.epsilonServerAddress = newAddress
}

export function addGetter (state, newGetter) {
  state.getters = {
    ...state.getters,
    [newGetter.id]: newGetter
  }
}

export function resetState (state) {
  state.getters = {}
}
