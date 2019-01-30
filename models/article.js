const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = Schema({
    headline: String,
    summary: String,
    url: String,
    date: Date,
    notes: String
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article 