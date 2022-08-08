console.log(`🟢 profile.js`)
let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let formComment = document.querySelector('#form-comment')

handleColor = (evt) => {
alert(`My favorite color is sunrise red`)
}
handlePlace = (evt) => {
alert(`My favorite place is in the mountains`)
}
handleRitual = (evt) => {
alert(`My favorite ritual is dancing around the medicine tree`)
}
handleComment = (evt) => {
    let date = new Date().toLocaleString()
    evt.preventDefault()
    alert(`You commented: "${document.getElementById('textarea-comment').value}" on ${date}`)
}

color.addEventListener('click', handleColor)
place.addEventListener('click', handlePlace)
ritual.addEventListener('click', handleRitual)
formComment.addEventListener('submit', handleComment)