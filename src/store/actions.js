import _ from 'lodash'

export function setEpsilonServerAddress ({ commit }, newAddress) {
  commit('setEpsilonServerAddress', newAddress)
}

export function addAttribute ({ commit }, newAttribute) {
  return new Promise((resolve) => {
    if (!newAttribute.method) {
      throw new Error('Must provide a method on attributes!')
    }
    newAttribute.id = _.uniqueId(`v${Date.now()}`)
    commit('addAttribute', newAttribute)
    return resolve(newAttribute.id)
  })
}

export function setAttributeValues ({ commit }, idValuePairs) {
  return Promise.all(_.map(idValuePairs, (value, id) => {
    if (id === undefined) { return }
    commit('setAttributeValue', { id, value })
  }))
}

export function setAttributeValue ({ commit }, { id, value }) {
  if (id === undefined) { return }
  commit('setAttributeValue', { id, value })
}

export function resetState ({ commit }) {
  commit('resetState')
}
