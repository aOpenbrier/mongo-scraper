const axios = require('axios')
const cheerio = require('cheerio')
const Article = require('../models/article')

module.exports = (app) => {

    app.get('/newarticles', (req, res) => {

        axios.get('https://www.nytimes.com/section/technology')
            .then(r => {
                let articleArr = []
                const $ = cheerio.load(r.data)
                $('section.e46isfb1').find('article').each((i, elem) => {
                    const articleObject = {
                        headline: $(elem).find('h2').text(),
                        summary: $(elem).find('p.css-1gh531').text(),
                        url: `https://newyorktimes.com${$(elem).find('a').attr('href')}`,
                        date: $(elem).find('a').attr('href').split('/').splice(1, 3).join('-'),
                        notes: ''
                    }
                    articleArr.push(articleObject)
                })
                res.json(articleArr)
            })
    })

    //see saved articles
    app.get('/savedarticles', (req, res) => {
        Article.find()
        .then(r => res.json(r))
    })

    //add to saved articles
    app.post('/savedarticles', (req, res) => {
        res.sendStatus(200)
        Article.find({
            headline: req.body.headline
        })
        .then(r => {

            if (r[0]) {
                console.log(`${r.headline} already in database`)
            } else {
                Article.create(req.body)
                console.log(`Added ${r.headline}`)
            }
        })
    })

    //delete one article
    app.delete('/savedarticles/:id', (req, res) => {
        res.sendStatus(200)
        Article.deleteOne({
            _id : req.params.id
        })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    })

    //delete all articles
    app.delete('/savedarticles', (req, res) => {
        res.sendStatus(200)
        Article.deleteMany({})
        .then(r => console.log(r))
        .catch(e => console.log(e))
    })

    //update notes
    app.put('/savedarticles/:id', (req, res) => {
        console.log(req.body)
        console.log(req.body.notes)
        res.sendStatus(200)
        Article.updateOne({
            _id: req.params.id
        },
        {
            $set: {
                notes: req.body.notes
            }
        })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    })
}