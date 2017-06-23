import _ from 'lodash'

export function setEpsilonServerAddress (state, newAddress) {
  state.epsilonServerAddress = newAddress
}

export function setAttribute (state, newAttribute) {
  state.attributes = {
    ...state.attributes,
    [newAttribute.id]: newAttribute
  }
}

export function deleteAttribute (state, attributeId) {
  state.attributes = _.omit(state.attributes, attributeId)
}

export function setAttributeValue (state, { id, value }) {
  state.attributes = {
    ...state.attributes,
    [id]: {
      ...state.attributes[id],
      value: value
    }
  }
}

export function addGameObject (state, newGameObject) {
  state.gameObjects = {
    ...state.gameObjects,
    [newGameObject.id]: newGameObject
  }
}

export function deleteGameObject (state, gameObjectId) {
  state.gameObjects = _.omit(state.gameObjects, gameObjectId)
}

export function resetAttributes (state) {
  state.attributes = {}
}

export function resetGameObjects (state) {
  state.gameObjects = {}
}
