

// https://raw.githubusercontent.com/fortrabbit/quotes/master/quotes.json

const happySection = document.createElement('section')
happySection.style.display = 'flex'
happySection.style.flexDirection = 'column'
happySection.style.alignItems = 'center'
docBody.appendChild(happySection)
const happyHeading = document.createElement('h2')
happyHeading.textContent = "Get inspired to Code!"
happySection.appendChild(happyHeading)
const buttonDiv = document.createElement('div')
buttonDiv.style.display = 'flex'
buttonDiv.style.flexDirection = 'row'
buttonDiv.style.alignItems = 'center'
happySection.appendChild(buttonDiv)
const yesButton = document.createElement('button')
yesButton.textContent = "Yes"
buttonDiv.appendChild(yesButton)
const noButton = document.createElement('button')
noButton.textContent = "No"
buttonDiv.appendChild(noButton)
