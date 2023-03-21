const { Pool } = require('pg');
require('dotenv/config');

const connection = new Pool({
  user: process.env.PG_USER || 'postgres',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'my_database',
  password: process.env.PG_PASSWORD || 'my_password',
  port: process.env.PG_PORT || 5432,
  ssl:true
});

export default connection;
