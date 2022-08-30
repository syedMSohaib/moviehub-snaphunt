module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Mysql123#@!',
        database: 'moviehub_snaphunt'
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      useNullAsDefault: true
    },

    staging: {
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Mysql123#@!',
        database: 'moviehub_snaphunt'
      }
    },

    production: {
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Mysql123#@!',
        database: 'moviehub_snaphunt'
      }
    }
};