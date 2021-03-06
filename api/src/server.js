const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const Helpers = require('./utils/boek.js')

const port = 4250

const pg = require('knex')({
  client: 'pg',
  version: '9.6',      
  searchPath: ['knex', 'public'],
  connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/werkstukdev5'
});




const app = express();
http.Server(app); 


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);  
//alle records terugsturen met GET request
app.get('/test', (req, res) => {

    const result = await pg
    .select(["uuid", "title", "created_at"])
    .from("story");
    res.json({
      res: result,
    });

  res.status(200).send();
})

app.get('/', async (req, res) => {
  const result = await pg
    .select(['uuid', 'title', 'created_at'])
    .from('story')
  res.json({
      res: result
  })
})

app.get('/story/:uuid', async (req, res) => {
  const result = await pg
    .select(['uuid', 'title', 'created_at'])
    .from('story')
    .where({uuid: req.params.uuid})
  res.json({
      res: result
  })
})
// Storyblock by ID
app.get('/story/:id', async (req, res) => {
  const result = await pg
    .select(['id', 'content'])
    .from('story')
    .where({id: req.params.id})

})

async function initialiseTables() {
  await pg.schema.hasTable('story').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('story', (table) => {
          table.increments();
          table.uuid('uuid');
          table.string('content');
          table.string('story_id');
          table.integer('order');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table storyblock');
        });

    }
  });
  await pg.schema.hasTable('story').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('story', (table) => {
          table.increments();
          table.uuid('uuid');
          table.string('title');
          table.string('summary');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table story');
          for (let i = 0; i < 10; i++) {
            const uuid = Helpers.generateUUID();
            await pg.table('story').insert({ uuid, title: `random element number ${i}` })
          }
        });
        
    }
  });
}
//delete storyblock
app.delete('/story', async (req, res) => {
  const result = await pg.select(["uuid", "content","story_id", "created_at"]).from("storyblock");
  res.json({
    res: result,
  });
})
initialiseTables()

module.exports = app;