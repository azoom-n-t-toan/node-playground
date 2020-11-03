require('dotenv').config()
const express = require('express');
const app = express();

var knex = require('knex')({
  client: 'pg',
  connection: {
    SOCKET_PATH: process.env.SOCKET_PATH,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
  }
})

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/test', async (req, res) => {
  const all = await knex('cities')
  res.json(all)
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
