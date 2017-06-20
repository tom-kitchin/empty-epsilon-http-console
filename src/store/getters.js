import _ from 'lodash'

export function epsilonServerAddress (state) {
  return state.epsilonServerAddress
}

export function attributes (state) {
  return state.attributes
}

export function attributesForGameObject (state) {
  return (gameObjectId) => {
    _.filter(state.attributes, _.matches({ gameObject: gameObjectId }))
  }
}
