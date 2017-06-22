import _ from 'lodash'

export function epsilonServerAddress (state) {
  return state.epsilonServerAddress
}

export function attributes (state) {
  return state.attributes
}

export function gameObjects (state) {
  return state.gameObjects
}

export function attributesForGameObject (state) {
  return (gameObjectId) => {
    return _.filter(state.attributes, _.matches({ gameObject: gameObjectId }))
  }
}

export function attributesWithoutGameObject (state) {
  return _.filter(state.attributes, (attribute) => {
    return !attribute.gameObject
  })
}
