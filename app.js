//Function to search a quote with a word

function searchQuote(quote) {

const searchedurl = `https://api.quotable.io/search/quotes?query=${quote}`

fetch(searchedurl)
.then((res) => res.json())
.then((search) => console.log(search))
}

//Function to get a random quote
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

//Use jQuery to get the random button to work
function showRandom() {
    document.querySelectorAll('button')
}

//Main Functions
randomQuote()
