require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/test', async (req, res) => {
  var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'toan',
      port: '3307',
    }
  })

  const all = await knex('users')
  res.json(all)
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
