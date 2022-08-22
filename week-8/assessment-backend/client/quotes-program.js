

const progQuoteSection = document.createElement('section')
docBody.appendChild(progQuoteSection)
const progQuoteHeading = document.createElement('h2')
progQuoteHeading.textContent = 'Programming Quote'
progQuoteSection.appendChild(progQuoteHeading)
const progQuoteButton = document.createElement('button')
progQuoteButton.textContent = 'Get a quote'
progQuoteSection.appendChild(progQuoteButton)
progQuoteSection.style.display = 'flex'
progQuoteSection.style.flexDirection = 'column'
progQuoteSection.style.alignItems = 'center'

const progQuoteView = (item) => {
  const quoteText = document.createElement('q')
  quoteText.textContent = item.text
  progQuoteSection.appendChild(quoteText)
  const authorName = document.createElement('p')
  authorName.textContent = '-' + item.author
  progQuoteSection.appendChild(authorName)
}

const getProgrammingQuote = async () => {
    try {
      let res = await axios.get('http://localhost:4000/api/quote/program')
      console.log(`get quote: ${res}`)
      progQuoteView(res.data)
  
      console.log(`🟢 getQuote()`)
    } catch (error) {
      console.log(`🔴 getQuote(): ${error}`)
    }
}
progQuoteButton.addEventListener('click', getProgrammingQuote)
