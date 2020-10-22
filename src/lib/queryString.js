module.exports.queryString = obj =>
  Object.entries(obj)
    .map(([prop, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        throw new Error('Only Arrays, strings and numbers are allowed here!')
      }
      return `${prop}=${value}`;
    })
    .join('&');
