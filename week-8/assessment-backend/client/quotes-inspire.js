const getQuote = async () => {
  try {
    let res = await axios.get('http://localhost:4000/api/quote/inspire')
    console.log(`get quote: ${res}`)
    quoteView(res.data)

    console.log(`🟢 getQuote()`)
  } catch (error) {
    console.log(`🔴 getQuote(): ${error}`)
  }
}

const quoteSection = document.createElement('section')
docBody.appendChild(quoteSection)
const quoteHeading = document.createElement('h2')
quoteHeading.textContent = 'Inspirational Quote'
quoteSection.appendChild(quoteHeading)
const quoteButton = document.createElement('button')
quoteButton.textContent = 'Get a quote'
quoteButton.addEventListener('click', getQuote)
quoteSection.appendChild(quoteButton)
quoteSection.style.display = 'flex'
quoteSection.style.flexDirection = 'column'
quoteSection.style.alignItems = 'center'

const quoteView = (item) => {
  const quoteText = document.createElement('q')
  quoteText.textContent = item.quote
  quoteSection.appendChild(quoteText)
  const authorName = document.createElement('p')
  authorName.textContent = '-' + item.author
  quoteSection.appendChild(authorName)
}
