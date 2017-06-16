import _ from 'lodash'
const rp = require('request-promise-native')

export default {
  queryServer (address, getters) {
    let gettersByObject = _.groupBy(getters, 'object')
    return Promise.all(_.map(gettersByObject, (getters, object) => {
      let queryStrings = _.mapValues(getters, 'method')
      return rp.request({
        uri: address,
        method: "GET",
        qs: queryStrings,
        json: true
      })
    })).then((responsesByObject) => {
      return resolve(_.merge({}, ..._.flatten(responsesByObject)))
    })
  }
}
