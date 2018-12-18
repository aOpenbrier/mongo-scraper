fetch('/savedarticles')
    .then(r => r.json())
    .then(r => {
        console.log(r)
        document.getElementById('savednews').innerHTML = ''
        r.forEach((article, index) => {
            const articleCard = document.createElement('div')
            articleCard.className = 'row mb-2'
            articleCard.id = `card${index}`
            articleCard.innerHTML = `<div class='card'><div class="card-body">
                <a class="card-link float-right btn btn-danger" data-object='${JSON.stringify(article)}' onclick='deleteArticle(this)'>Delete</a>
                <h5 class="card-title"><a href='${article.url}'>${article.headline}</a></h5>
                <p class="card-text">${article.summary}</p>
                <p class='cart-text text-muted small'>${article.date}</p>
            </div>
            <div class="card-footer text-muted">
                <form>
                    <label class='form-control' for='notesinput${index}'><h5>Notes:</h5></label
                    <a class="card-link btn float-right" data-object='${JSON.stringify(article)}' onclick='editNotes(this)'>Edit</a>
                    <input class='form-control' id='notesinput${index}' type='text' disabled>example</input>
                    <button type="submit" class="btn btn-primary" onlick='saveNotes(this)'>Save</button>
                </form>
            </div>
            </div>
            `
            document.getElementById('scrapednews').appendChild(articleCard)
        })
    })
    .catch(e => console.log(e))

function deleteArticle(elem){
    // Send delete request to server
    // TODO

    // Remove element from DOM
    // TODO
    }

function editNotes(elem){
    // enable form editing
 }

function saveNotes(elem){
    //  send update request to server 
 }

