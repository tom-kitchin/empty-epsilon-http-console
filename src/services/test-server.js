import _ from 'lodash'

export function batchGetAttributes (address, attributes) {
  return Promise.all(_.map(attributes, (attribute) => {
    if (attribute.value) {
      // Most of the time, if we already have a value just use that.
      if (_.sample([true, true, true, false])) {
        return { [attribute.id]: attribute.value }
      }
    }
    return { [attribute.id]: getRandomResult() }
  })).then((results) => {
    return _.merge({}, ...results)
  })
}

export function getAttribute (address, attribute) {
  if (attribute.value) {
    // Most of the time, if we already have a value just use that.
    if (_.sample([true, true, true, false])) {
      return Promise.resolve({ [attribute.id]: attribute.value })
    }
  }
  return Promise.resolve({ [attribute.id]: getRandomResult() })
}

function getRandomResult () {
  return _.sample([1, 10, 500, 'boom', 'oh no', 150.25, 0, 10.99])
}
