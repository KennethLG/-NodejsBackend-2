module.exports = {
  api: {
    port: process.env.API_PORT || 3001
  },
  jwt: {
    secret: process.env.JWT_SECRET || "mi secreto"
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "AJthbMAvwu",
    password: process.env.MYSQL_PASSWORD || "CCeNtJXdvK",
    database: process.env.MYSQL_DATABASE || "AJthbMAvwu",
  }
}