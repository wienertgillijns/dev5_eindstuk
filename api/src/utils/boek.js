
const {v1: uuidv1 } = require('uuid');
const app = require('../server');

const Helpers = {
  generateUUID: () => {
     const uuid = uuidv1();  
     return uuid;
  }
}

async function boekenData(){
  let boekenlistList = []
  await pg.schema.hasTable('books').then(async (exists) => {
    await pg.schema.createTable('books', (table) => {
      table.string(naamBoek)
      table.string(genreBoek)
      table.string(auteurBoek)

    }
    )}
  )}
  app.get('/api/:uuid', async (req, res) => {
    
  })
  app.delete('/api/:uuid', async (req, res) => {

    try {
      await pg('api').where({uuid: uuid}).del().then(data => {
          res.status(300).send()
          console.log(`Book deleted`)

      })
      
  }catch(e){
      res.status(400).send("Problem with deleting book")
  }
  })


module.exports = Helpers