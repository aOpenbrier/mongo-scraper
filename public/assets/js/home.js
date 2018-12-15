
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
            <a class="card-link float-right" onclick='saveArticle()'>Save</a>
            </div></div>
            `
            document.getElementById('scrapednews').appendChild(articleCard)
        })
    })
    .catch(e => console.log(e))

function saveArticle () {
    //  TODO:  //////// 
    // fetch post article

console.log('this will save the article')
}