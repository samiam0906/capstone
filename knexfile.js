// Update with your config settings.

module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/travelApp',
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/travelApp',
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/production'
    }
  }
};
