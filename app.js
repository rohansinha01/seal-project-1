//Function to search a quote with a word

function searchQuote(quote) {

const searchedurl = `https://api.quotable.io/quotes?tags=${quote}` //link to api that we will pull our data from

fetch(searchedurl) //fetch our data
.then((res) => res.json())//put our data in JSON format
.then((search) => renderSearch(search)) //when we search
}


//Get a searched quote to be on the page

function renderSearch(search) {
    if (search.count === 0){
        alert('Search our site for one of our clichés!')
    }
    
    const searchdiv = document.querySelector('.search')

    const ul = document.createElement('ul')
       
    for(let a=0 ;a < search.count; a++){
    const searchArray =[search.results[a].content]
    const authorArray =[search.results[a].author]
  
    // console.log(emptyArray)
    // console.log(authorArray)
   
    const li = document.createElement('li')
    li.innerHTML = (`${searchArray} -${authorArray}`)
    ul.appendChild(li)
    searchdiv.replaceChildren(ul) //makes sure that searching again doesn't add to the list and gives new search results
  
}}

//use of jQuery to update the tagline
const tagline = $(`.tagline`)
const taglineToReplace = tagline.text()
const newTagline = taglineToReplace.replace("Fall in love with a new cliché... today!", "Fall in love with a new cliché. Today!")
tagline.text(newTagline)

//use of jQuery to add classes to divs
$('h4').addClass('randomTitle')

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