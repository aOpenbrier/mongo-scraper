const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost/mongoscraper'

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(mongodbURI, { useNewUrlParser: true })

require('./routes')(app)

app.listen(PORT, () => console.log(`listening at ${PORT}`))