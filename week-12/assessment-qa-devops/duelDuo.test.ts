import { Builder, Capabilities, By, until } from 'selenium-webdriver'

jest.useFakeTimers() // tests with setTimeout will error without this

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
  driver.get('http://localhost:3000/')
})

afterAll(async () => {
  driver.quit()
})

test('Title shows up when page loads', async () => {
  const title = await driver.findElement(By.id('title'))
  const displayed = await title.isDisplayed()
  expect(displayed).toBe(true)
})

test('Clicking the Draw button displays the div with id = “choices”', async () => {
  driver.findElement(By.id('draw')).click()
  const divChoices = await driver.findElement(By.id('choices'))
  const displayed = await divChoices.isDisplayed()
  expect(displayed).toBe(true)
})

test('Clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
  driver.findElement(By.id('draw')).click()
  setTimeout(async () => {
    await driver.findElement(By.linkText('Add to Duo')).click()
  }, 5000)
  const divPlayerDuo = await driver.findElement(By.id('choices'))
  const displayed = await divPlayerDuo.isDisplayed()
  expect(displayed).toBe(true)
})

// const choices = require('./public/index.js')
test('When a bot is “Removed from Duo”, that it goes back to “choices”', async () => {
  await driver.findElement(By.id('draw')).click() //simulate draw button click
// see what our choices are
  const arrayBeforeAddToDuo = await driver.findElements(
    By.xpath("//div[@id='choices']//div[@class='bot-card outline']//h3")
  ) // returns an array of promises although xpath points to bot name

    // convert array of promises to array of bot names
  const choicesBeforeAddToDuo = await Promise.all(
      arrayBeforeAddToDuo.map(async (promise) => {
              // get the text value from the selected promise
      return promise.getAttribute('textContent')
    })
  )

  await driver
    .findElement(By.xpath("//button[contains(., 'Add to Duo')]"))
    .click() // simulate adding a bot
  await driver
    .findElement(By.xpath("//button[contains(., 'Remove from Duo')]"))
        .click() // simulate removing a bot
    
// see what our choices are
  const arrayAfterRemoveFromDuo = await driver.findElements(
    By.xpath("//div[@id='choices']//div[@class='bot-card outline']//h3")
  ) // returns an array of promises

        // convert array of promises to array of bot names
  const choicesAfterRemoveFromDuo = await Promise.all(
    arrayAfterRemoveFromDuo.map(async (promise) => {
      // get the text value from the selected promise
      return promise.getAttribute('textContent')
    })
  )

  expect(new Set(choicesBeforeAddToDuo)).toEqual(new Set(choicesAfterRemoveFromDuo))
})
