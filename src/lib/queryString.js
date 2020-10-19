module.exports.queryString = (obj) => {
    const entries = Object.entries(obj)
    return entries.map(e=> e.join('=')).join("&")
}