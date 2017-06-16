import _ from 'lodash'

export function setEclipseServerAddress ({ commit }, newAddress) {
  commit('setEclipseServerAddress', newAddress)
}

export function addGetter ({ commit }, newGetter) {
  newGetter.id = _.uniqueId('getter-')
  commit('addGetter', newGetter)
}
