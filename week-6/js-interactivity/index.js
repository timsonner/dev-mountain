console.log(`🟢 Starting: index.js`)

const message = document.querySelector("message")


const addMovie = (event) => {
    self.message.classList.remove("hide")
    event.preventDefault() // prevents page reload on form submit
    const inputField = document.querySelector("input") // greab user input
    let movie = document.createElement("li") // create list item named movie
    let movieTitle = document.createElement("span") // create span that will hold a string
    movieTitle.textContent = inputField.value // update span to match user input
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle) // add span to list item
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn) // add button to list item
    document.querySelector("ul").appendChild(movie) // add list item to unordered list
    inputField.value = ""
    self.message.textContent = "Movie Added"
    revealMessage()
}

document.querySelector("form").addEventListener("submit", addMovie) // on submit, add a list item

const deleteMovie = (event) => {
event.target.parentNode.remove() // remove the parent element from the doucument, in this case the list item is the parent of the button.
self.message.textContent = `${event.target.parentNode.firstChild.textContent} Removed`
revealMessage()
}

const crossOffMovie = (event) => {
event.target.classList.toggle("checked")
if (event.target.classList.contains("checked")) {
self.message.textContent = `${event.target.textContent} has been watched`
} else {
    self.message.textContent = `${event.target.textContent} is in queue to be watched`
}
revealMessage()
}

const revealMessage = () => {
    self.message.classList.remove("hide")
    setTimeout(() => {
self.message.classList.add("hide")
    }, 2000)
}

