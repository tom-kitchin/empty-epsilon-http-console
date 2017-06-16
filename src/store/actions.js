export function setEclipseServerAddress ({ commit }, newAddress) {
  commit('setEclipseServerAddress', newAddress)
}

export function addGetter ({ commit }, newGetter) {
  if (!newGetter.method) {
    throw new Error('Must provide a method on getters!')
  }
  let getter = {
    object: '',
    ...newGetter
  }
  // Build an ID based on a together-unique pair.
  getter.id = `${getter.object}-${getter.method}`
  commit('addGetter', getter)
}
