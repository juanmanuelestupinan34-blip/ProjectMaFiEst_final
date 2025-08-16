const info = (dbName, ...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`[${dbName}]`, ...params)
  }
}

const error = (dbName, ...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(`[${dbName}]`, ...params)
  }
}

module.exports = {
  info, error
}

