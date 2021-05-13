const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const Discogs = require('disconnect').Client;
dotenv.config()

const app = express()
app.use(express.json())
app.get('/api', (req, res) => res.send("tst here"));

var db = new Discogs({
    consumerKey: process.env.ConsumerKey,
    consumerSecret: process.env.ConsumerSecret
}).database();
console.log(db)
console.log(db.search({artist:"Beachwood Sparks"}).then(data => console.log(data)))
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on port ${PORT}`))