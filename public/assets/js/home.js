function getLatest(){
    return fetch('/newarticles')
        .then(r => r.json())
}

function getSaved(){
    return fetch('/savedarticles')
        .then(r => r.json())
}

function getArticles() {
    return Promise.all([getLatest(), getSaved()])
}

getArticles()
    .then(([latest, saved]) => {
        document.getElementById('scrapednews').innerHTML = ''
        latest.forEach((article, index) => {
            //check if article was previously saved
            let isSaved = false
            saved.forEach(savedArticle => {
                if (article.url === savedArticle.url){
                    console.log(article.url + ' ' + savedArticle.url)
                    isSaved = true
                }
            })
            const articleCard = document.createElement('div')
            articleCard.className = 'row mb-2'
            articleCard.innerHTML = `<div class='card w-100'><div class="card-body">
            <button class="btn ${isSaved ? 'btn-success' : 'btn-primary'} float-right" data-object='${JSON.stringify(article)}' onclick='saveArticle(this)'>Save${isSaved ?'d':''}</button>
            <h5 class="card-title"><a href='${article.url}'>${article.headline}</a></h5>
            <p class="card-text">${article.summary}</p>
            <p class='cart-text text-muted small'>${article.date}</p>
            </div></div>
            `
            document.getElementById('scrapednews').appendChild(articleCard)
        })
    })
    .catch(e => console.log(e))

function saveArticle(elem) {
    event.preventDefault()
    // send article to server to save to db
    fetch('/savedarticles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: elem.getAttribute('data-object')
    })
        .then(r => { 
            console.log(r)
            elem.innerText = 'Saved'
            elem.classList.remove('btn-primary')
            elem.classList.add('btn-success')
        })
        .catch(e => { console.error(e) })
}