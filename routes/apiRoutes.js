const axios = require('axios')
const cheerio = require('cheerio')

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
                        date: $(elem).find('a').attr('href').split('/').splice(1, 3).join('-')
                    }
                    articleArr.push(articleObject)
                })
                res.json(articleArr)
            })
    })

    //see saved articles
    app.get('/savedarticles', (req, res) => {

    })

    //add to saved articles
    app.post('savedarticles', (req, res) => {
        //   TODO:
        //   -save to mongo database
    })

    //delete one article
    app.delete('/savedarticles-:id', (req, res) => {

    })

    //delete all articles
    app.delete('/savedarticles', (req, res) => {

    })

    //update notes
    app.put('/notes-:id', (req, res) => {

    })
}