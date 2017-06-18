import _ from 'lodash'

export function setEpsilonServerAddress ({ commit }, newAddress) {
  commit('setEpsilonServerAddress', newAddress)
}

export function addGetter ({ commit }, newGetter) {
  return new Promise((resolve) => {
    if (!newGetter.method) {
      throw new Error('Must provide a method on getters!')
    }
    newGetter.id = _.uniqueId(`v${Date.now()}`)
    commit('addGetter', newGetter)
    return resolve(newGetter.id)
  })
}

export function setGetterValues ({ commit }, idValuePairs) {
  return Promise.all(_.map(idValuePairs, (value, id) => {
    commit('setGetterValue', { id, value })
  }))
}

export function setGetterValue ({ commit }, { id, value }) {
  commit('setGetterValue', { id, value })
}

export function resetState ({ commit }) {
  commit('resetState')
}
