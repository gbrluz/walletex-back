const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5433,
      user: 'postgres',
      password: 'admin',
      database: 'postgres',
    },
  });
  
 module.exports = {database:knex}