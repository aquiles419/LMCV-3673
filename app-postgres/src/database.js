let conn;

(async () => {
  connect();
  await createTable();
  await insert();
  await showRows();
})();

function connect() {
  let { Client } = require('pg');
  conn = new Client({
    host: 'localhost',
    database: 'poc',
    password: 'admin',
    port: 5432,
  });
  conn.connect();
}

async function createTable() {
  await conn.query(`
    create table if not exists users (
      id integer not null,
      name varchar,
      email varchar,
      primary key (id)
    )
  `);
  console.log('Table created');
}

async function insert() {
  let { rows } = await conn.query(
    `insert into users (id, name, email) values (1, 'Aquiles','aquiles@aquiles.com'), (2, 'wesley', 'wesley@wesley.com') returning *`
  );
  console.log(`Rows inserted: ${rows.length}`);
}

async function showRows() {
  let { rows } = await conn.query(`select * from users`);
  for (const row of rows) {
    console.log(row);
  }
}