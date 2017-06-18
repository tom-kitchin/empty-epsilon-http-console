import _ from 'lodash'

export function batchGetAttributes (address, attributes) {
  let attributesByObject = _.groupBy(attributes, (object) => {
    if (object.gameObject) { return object.gameObject }
    return ''
  })
  return Promise.all(_.map(attributesByObject, (attributes) => {
    let queryString = buildGetQueryParams(attributes)
    return _get(address, queryString)
  })).then((responses) => {
    return Promise.resolve(_.merge({}, ..._.flatten(responses)))
  })
}

export function getAttribute (address, attribute) {
  let queryString = buildGetQueryParams(attribute)
  return _get(address, queryString)
}

function _get (address, queryString, options = {}) {
  return fetch(`${address}/get.lua?${queryString}`, {
    method: 'GET',
    ...options
  }).catch((error) => {
    console.log(['Error communicating with EmptyEpsilon', error])
  }).then((response) => {
    console.log(response)
    return response.json()
  }).then((json) => {
    console.log(json)
    if (json.ERROR) {
      throw new Error(json.ERROR)
    }
    return json
  }).catch((error) => {
    console.log(['Error parsing JSON', error])
  })
}

function buildGetQueryParams (attributes) {
  let queryString = _.join(_.map(attributes, (attribute) => {
    return `${encodeURIComponent(attribute.id)}=${encodeURIComponent(methodNameToMethod(attribute.method))}`
  }), '&')

  if (!_.isEmpty(attributes[0].gameObject)) {
    queryString = `_OBJECT_=${methodNameToMethod(attributes[0].gameObject)}&${queryString}`
  }

  return queryString
}

function methodNameToMethod (methodName) {
  if (!_.endsWith(methodName, ')')) {
    return `${methodName}()`
  }
  return methodName
}
