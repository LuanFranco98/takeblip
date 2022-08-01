const omit = (obj) => {
    Object.entries(obj).forEach(pair => {
        if(obj[pair[1]] === undefined) {
            delete obj[pair[0]]
        }
    })
    return obj
}

module.exports = { omit }
