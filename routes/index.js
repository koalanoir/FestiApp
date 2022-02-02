const client = require('../database/init/connectionBD')
const artist = require('../database/get/getArtist').getArtist
const event= require('../database/get/getEvent').getEvent
const newPost = require('../database/add/putPost').putPost
const updatePost = require('../database/update/updatePost').updatePost
const newLike = require('../database/add/addLike').addLike
const newEvent = require('../database/add/addEvent').addEvent
const dropCom = require('../database/delete/deleteCom').deletePostCom
const dropPost= require('../database/delete/dropPost').deletePost
const express = require('express')
const app = express()
const cors = require('cors');
const port = 3300
const corsOptions ={
    origin:'http://localhost:8100', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const bodyParser = require("body-parser")
app.use(bodyParser.json())
client.connect();
// Middleware
app.use(express.json())
app.get('/artist', (req, res)=>{
    artist(client,req,res)
})

app.get('/event', (req, res)=>{
    event(client,req,res)
})


app.post('/publications/:id', (req, res)=> {
    newPost(client,req,res)
})

app.put('/publications/:id/update', (req, res)=> {
    updatePost(client,req,res)
})

app.put('/publications/:id/like', (req, res)=> {
    newLike(client,req,res)
})

app.put('/publications/:id/com/del', (req, res)=> {
    dropCom(client,req,res)
})

app.put('/event', (req, res)=> {
    newEvent(client,req,res)
})

app.delete('/publications/:id/drop', (req, res)=> {
    dropPost(client,req,res)
})

app.listen(port, () => {
    console.log("Serveur à l'écoute on port : "+ port)
  })

