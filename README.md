# NYT Tech Scraper
> _Preview current Technology articles from New York Times. Save selected article details and URL in Mongo database_

Mongo Scraper pulls current articles New York Times Technology section. User can choose to save an article's headline, summary, URL, and date to MongoDB. From the "Saved" page, user can leave notes about each article or delete saved articles.

## Deployment
Deployed to [Heroku](https://mdb-scraper.herokuapp.com/)

## Development setup
Project uses node server environment. If you haven't already, install [Node.js](https://nodejs.org/en/download/)

Install dependencies:
```bash
npm i
```

Test on local host:
```bash
node server.js
```

## Technologies Used
- [MongoDB](https://www.mongodb.com/) - Open-source NoSQL database
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool for Node
- [Node.js](https://nodejs.org) - JavaScript server environment
- [Express](https://www.npmjs.com/package/express) - Server framework for Node
- [Cheerio](https://www.npmjs.com/package/cheerio) - HTML parsing and API for traversing/manipulating the resulting data structure
- [Axios](https://www.npmjs.com/package/axios) - HTTP client for Node

## Author
Adam Openbrier
 &bull; [Portfolio](https://www.adamopenbrier.com/portfolio.html)  
 &bull; [GitHub](https://github.com/aOpenbrier)  