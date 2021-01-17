
// const app = require('./server.js');
const express = require('express');
const app = express();
const port = 3000;
// const Helpers = require('./../utils/helpers.js');
//const app = require('./server.js');
//app.listen(3000)

app.listen(4150)

app.post('/testWienert', (req, res) => {
    
    
    
     const stories = {
       uuid: MYUUID,
      title: "MY TITLE"
     }
    //  story.push(stories)
    //  res.status(201).json(stories)
     res.send(403)
    
    })
    app.get('/messages', (req,res) => {
        res.send("Hello World")
        })
        




        //https://docs.docker.com/compose/gettingstarted/
        
        