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
    const formdiv = document.querySelector('form')
    const ul = document.createElement('ul')
    // const emptyArray = []
    for(let a=0 ;a < search.count; a++){
    const emptyArray =[search.results[a].content]
    const authorArray =[search.results[a].author]
    console.log(emptyArray)
    console.log(authorArray)
    const li = document.createElement('li')
    li.textContent = (`${emptyArray} -${authorArray}`);
    ul.appendChild(li)}
    document.body.append(ul)
    searchdiv.before(ul)
}

//use of jQuery to update the tagline
const tagline = $(`.tagline`)
const taglineToReplace = tagline.text()
const newTagline = taglineToReplace.replace("Fall in love with a new cliché... today!", "Fall in love with a new cliché. Today!")
tagline.text(newTagline)

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
    quotediv.innerHTML = `<h1>${random[0].content} -${random[0].author}</h1>`
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



// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};