fetch('/savedarticles')
    .then(r => r.json())
    .then(r => {
        document.getElementById('savednews').innerHTML = ''
        r.forEach((article, index) => {
            const articleCard = document.createElement('div')
            articleCard.className = 'row mb-3'
            articleCard.id = `card${index}`
            articleCard.innerHTML = `<div class='card w-100'><div class="card-body">
                <button class="float-right btn btn-danger" data-id='${article._id}' data-cardIndex='${index}' onclick='deleteArticle(this)'>Delete</button>
                <h5 class="card-title"><a href='${article.url}'>${article.headline}</a></h5>
                <p class="card-text">${article.summary}</p>
                <p class='cart-text text-muted small'>${article.date.split('T')[0]}</p>
            </div>
            <div class="card-footer py-1">
                <form>
                        <div class='d-flex'><label for='notesinput${index}' class='mr-auto mb-0 align-self-center'><h6 class='mb-0'>Notes:</h6></label>
                        <button id='editBtn${index}' class="btn btn-primary mx-2" data-cardIndex='${index}' onclick='editNotes(this)'>Edit</button>
                        <button id='saveBtn${index}' class="btn btn-primary" data-id='${article._id}' data-cardIndex='${index}' onclick='saveNotes(this)' disabled>Save</button>
                        </div>
                        <input class='form-control' id='notesinput${index}' type='text' value='${article.notes ? article.notes : '' }' disabled>
                </form>
            </div>
            </div>
            `
            document.getElementById('savednews').appendChild(articleCard)
        })
    })
    .catch(e => console.log(e))

function deleteArticle(elem){

    // Send delete request to server
    fetch(`savedArticles/${elem.getAttribute('data-id')}`, {
        method: 'DELETE'
    })
    .then(r => {
        // Remove element from DOM
        document.getElementById(`card${elem.getAttribute('data-cardIndex')}`).remove()
        console.log(r)
    })
    .catch(e => console.error(e))

function editNotes(elem){
    event.preventDefault()
    // enable input
    const cardIndex = elem.getAttribute('data-cardIndex')
    document.getElementById(`notesinput${cardIndex}`).removeAttribute('disabled')
    // enable save button
    document.getElementById(`saveBtn${cardIndex}`).removeAttribute('disabled')
    // disable edit button
    document.getElementById(`editBtn${cardIndex}`).setAttribute('disabled', true)
 }

function saveNotes(elem){
    event.preventDefault()
    //  send update request to server
    const cardIndex = elem.getAttribute('data-cardIndex')
    const notes = document.getElementById(`notesinput${cardIndex}`).value
    fetch(`/savedarticles/${elem.getAttribute('data-id')}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({"notes": notes})
    })
    .then(r => console.log(r))
    .catch(e => console.log(e))

    // disable save button
    document.getElementById(`saveBtn${cardIndex}`).setAttribute('disabled', true)
   
    // disable form
    document.getElementById(`notesinput${cardIndex}`).setAttribute('disabled', true)
    // renable edit button
    document.getElementById(`editBtn${cardIndex}`).removeAttribute('disabled')
 }

