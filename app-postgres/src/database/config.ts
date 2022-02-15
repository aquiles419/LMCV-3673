import { Client } from 'pg';

interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  database: 'poc_aquiles',
  password: 'docker',
  port: 5432,
});

export async function create(data: User): Promise<void> {
  /* 
    {
      name: 'João',
      email: 'joao@mail.com',
      _id: '620bc29f4eb642ce41533362',
      createdAt: '2022-02-15T15:11:27.073Z',
      updatedAt: '2022-02-15T15:11:27.073Z',
      __v: 0
    }
  */
  // TODO: salvar no banco
  // const result = await client.query(
  //   `INSERT INTO users (id, name, email) VALUES (${data._id}, ${data.name}, ${data.email})`
  // );
  await client.query('INSERT INTO users (id, name, email, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)', [
    data._id,
    data.name,
    data.email,
    data.createdAt,
    data.updatedAt,
  ]);

  console.log('Dado criado.');
}

export default client;
