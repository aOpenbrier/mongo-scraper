
fetch('/newarticles')
    .then(r => r.json())
    .then(r => {
        console.log(r)
        document.getElementById('scrapednews').innerHTML = ''
        r.forEach((article, index) => {
            const articleCard = document.createElement('div')
            articleCard.className = 'row mb-2'
            articleCard.innerHTML = `<div class='card'><div class="card-body">
            <h5 class="card-title"><a href='${article.url}'>${article.headline}</a></h5>
            <p class="card-text">${article.summary}</p>
            <p class='cart-text text-muted small'>${article.date}</p>
            <a class="card-link btn float-right" data-object='${JSON.stringify(article)}' onclick='saveArticle(this)'>Save</a>
            </div></div>
            `
            document.getElementById('scrapednews').appendChild(articleCard)
        })
    })
    .catch(e => console.log(e))

function saveArticle(elem) {
    // send article to server to save to db
    fetch('/savedarticles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },            // 'Content-Type' key needs to be wrapped in quotes since it has a hyphen
        body: elem.getAttribute('data-object')
    })
        .then(r => { console.log(r) })
        .catch(e => { console.error(e) })

console.log('this will save the article')
}