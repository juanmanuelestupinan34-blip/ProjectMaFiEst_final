const info = (connection, ...params) => {
  if (process.env.NODE_ENV !== 'test') {
    const dbName = connection && connection.name ? connection.name : 'UNKNOWN_DB';
    console.log(`[${dbName}]`, ...params);
  }
}

const error = (connection, ...params) => {
  if (process.env.NODE_ENV !== 'test') {
    const dbName = connection && connection.name ? connection.name : 'UNKNOWN_DB';
    console.error(`[${dbName}]`, ...params);
  }
}

module.exports = {
  info,
  error
}
