//Function to search a quote with a word

function searchQuote(quote) {

const searchedurl = `https://api.quotable.io/quotes?tags=${quote}`

fetch(searchedurl)
.then((res) => res.json())
.then((search) => renderSearch(search))
}

//Get a searched quote to be on the page

function renderSearch(search) {
    const searchdiv = document.querySelector('.search')

    for(let a=0 ;a < search.count; a++){
    searchdiv.innerHTML = `<h1>${search.results[a].content}</h1>`} 
}

// Funciton to handle the search function

// Function to get a random quote
function randomQuote() {
const randomurl = 'https://api.quotable.io/quotes/random'   

fetch(randomurl)
.then((res) => res.json())
.then((random) => renderRandom(random))
}

//Get a random quote to be on the page
function renderRandom(random) {
    const quotediv = document.querySelector('.random')
    quotediv.innerHTML = `<h1>${random[0].content}</h1>`
}
// function to handle the form submission
function handleSubmit(event){
    // prevent the refreshing of the page from the form submission
    event.preventDefault()
    // grab the form from the event
    const form = event.target

    const formData = new FormData(form)
    // grab the search
    const quote = formData.get("quote")

    searchQuote(quote)
}
//Main Functions
document.querySelector('form').addEventListener('submit', handleSubmit)
searchQuote()
randomQuote()
