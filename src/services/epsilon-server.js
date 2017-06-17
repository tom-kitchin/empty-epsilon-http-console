import _ from 'lodash'

export function epsilonGet (address, getters) {
  let gettersByObject = _.groupBy(getters, (object) => {
    if (object.gameObject) { return object.gameObject }
    return ''
  })
  return Promise.all(_.map(gettersByObject, (getters, gameObject) => {
    let queryString = buildQueryParamsFromObjectCollection(getters, gameObject)
    return fetch(`${address}/get.lua?${queryString}`, {
      method: 'GET'
    }).catch((error) => {
      console.log('Error communicating with EmptyEpsilon')
      throw error
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
      console.log('Error parsing JSON')
      throw error
    })
  })).then((responses) => {
    _.map(responses, (response) => { return response.json() })
  }).then((valuesByObject) => {
    return Promise.resolve(_.merge({}, ..._.flatten(valuesByObject)))
  }).catch((error) => {
    console.log(['Error in epsilon-server', error])
    throw error
  })
}

function buildQueryParamsFromObjectCollection (queryables, gameObject) {
  let queryString = _.join(_.map(queryables, (queryable) => {
    return `${encodeURIComponent(queryable.id)}=${encodeURIComponent(methodNameToMethod(queryable.method))}`
  }), '&')

  if (!_.isEmpty(gameObject)) {
    queryString = `_OBJECT_=${methodNameToMethod(gameObject)}&${queryString}`
  }

  return queryString
}

function methodNameToMethod (methodName) {
  if (!_.endsWith(methodName, ')')) {
    return `${methodName}()`
  }
  return methodName
}
