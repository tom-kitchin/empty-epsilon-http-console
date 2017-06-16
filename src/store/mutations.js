export function setEclipseServerAddress (state, newAddress) {
  state.eclipseServerAddress = newAddress
}

export function addGetter (state, newGetter) {
  state.getters = {
    ...state.getters,
    [newGetter.id]: newGetter
  }
}
