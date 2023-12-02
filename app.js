const randomurl = 'https://api.quotable.io/quotes/random'

fetch(randomurl)
.then((res) => res.json())
.then((data) => console.log(data))

const searchedurl = 'https://api.quotable.io/search/quotes?query=life+happiness'

fetch(searchedurl)
.then((res) => res.json())
.then((search) => console.log(search))