const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

require("./db/conn");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
  res.send({success: 1, ping: 1 })
})

app.post('/', (req,res) => {
  res.send({success: 1, pong: 1 })
})

app.use('/test', require('./routes/test'));



const PORT = 8000
app.listen(PORT , ()=>{ console.log('App is running on http://localhost:'+PORT)} )