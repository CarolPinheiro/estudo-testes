const keyValueToString = ([prop, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Only Arrays, strings and numbers are allowed here!')
  }
  return `${prop}=${value}`;
}

module.exports.queryString = obj =>
  Object.entries(obj)
    .map(keyValueToString)
    .join('&');

module.exports.parse = str => Object.fromEntries(str.split('&').map(e => {
  let [key, value] = e.split('=')
  if (value.indexOf(',') !== -1) {
    return [key, value.split(',')]
  }
  return [key, value]
}))
