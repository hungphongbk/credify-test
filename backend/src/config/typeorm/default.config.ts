const path = require("path");

const rootDir = path.resolve(__dirname, "../../");

module.exports = {
    "name": "default",
    "type": "postgres",
    "host": process.env.POSTGRES_HOST || 'postgres',
    "port": 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "changeme",
    database: process.env.POSTGRES_DB || "postgres",
    "synchronize": true,
    "logging": false,
    entities: [`${rootDir}/entities/*{.js,.ts}`],
    migrations: [`${rootDir}/migrations/*{.js,.ts}`],
    seeds: [`${rootDir}/seeds/*{.js,.ts}`],
    factories: [`${rootDir}/factories/*{.js,.ts}`]
}
