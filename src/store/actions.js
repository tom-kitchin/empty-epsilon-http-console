import _ from 'lodash'

export function setEpsilonServerAddress ({ commit }, newAddress) {
  commit('setEpsilonServerAddress', newAddress)
}

export function addAttribute ({ commit }, newAttribute) {
  return new Promise((resolve) => {
    if (!newAttribute.method) {
      throw new Error('Must provide a method on attributes!')
    }
    newAttribute.id = _.uniqueId(`a${Date.now()}`)
    commit('setAttribute', newAttribute)
    return resolve(newAttribute.id)
  })
}

export function updateAttribute ({ commit }, newAttribute) {
  if (!newAttribute.id) {
    throw new Error('Cannot update an attribute with no id!')
  }
  commit('setAttribute', newAttribute)
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

export function addGameObject ({ commit }, newGameObject) {
  return new Promise((resolve, reject) => {
    if (!newGameObject.method) {
      return reject('Must provide a method on game objects!')
    }
    newGameObject.id = _.uniqueId(`go${Date.now()}`)
    commit('addGameObject', newGameObject)
    return resolve(newGameObject.id)
  })
}

export function resetState ({ commit }) {
  commit('resetAttributes')
  commit('resetGameObjects')
}
