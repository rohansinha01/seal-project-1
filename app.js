function getQuote(quote) {



const randomurl = 'https://api.quotable.io/quotes/random'
const searchedurl = `https://api.quotable.io/search/quotes?query=${quote}`


fetch(randomurl)
.then((res) => res.json())
.then((data) => console.log(data))



fetch(searchedurl)
.then((res) => res.json())
.then((search) => console.log(search))
}
function renderQuote(quote) {
    const quotediv = document.querySelector('.quote')
    quotediv.innerHTML = 
    '<h1>quotediv</h1>'
}



getQuote('happiness')

