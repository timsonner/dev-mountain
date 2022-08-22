// controller sends back the response status from the server
// functions here are called by the front end
// this is where the CRUD lives
// this is where module exports happen

import axios from 'axios'

export function getCompliment(req, res) {
  const compliments = [
    "Gee, you're a smart cookie!",
    'Cool shirt!',
    'Your Javascript skills are stellar.',
  ]

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length)
  let randomCompliment = compliments[randomIndex]

  res.status(200).send(randomCompliment)
}
export function getFortune(req, res) {
  const fortunes = [
    'A fresh start will put you on your way',
    'A good time to finish up old tasks',
    'A lifetime of happiness lies ahead of you',
    'A pleasant surprise is waiting for you',
    'Stay up late and code',
    'All will go well with your new project',
    'At the touch of love, everyone becomes a poet',
    'Chance favors those in motion',
  ]
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
}

let goals = [
  { id: '42', text: 'Find the answer to life, the universe, and everything' },
]

export function getGoals(req, res) {
  console.log(`🟢 getGoals()`)
  res.status(200).send(goals)
}

export function createGoal(req, res) {
  try {
    goals.push(req.body)
    res.status(200).send(`🟢 createGoal()`)
  } catch (error) {
    console.log(`🔴 createGoal(): ${error}`)
    res.status(400).send(`🔴 createGoal(): ${error}`)
  }
}

export function updateGoal(req, res) {
  try {
    const id = req.params.id // param 'id' is a string
    const { text } = req.body // req.body looks like { text: 'The answer' }
    const goal = goals.find((element) => element.id === id)
    goal.text = text
    console.log(`🟢 updateGoal()`)
    res.status(200).send(`🟢 updateGoal()`)
  } catch (error) {
    console.log(`🔴 updateGoal(): ${error}`)
    res.status(400).send(`🔴 updateGoal(): ${error}`)
  }
}

export function deleteGoal(req, res) {
  try {
    const id = req.params.id
    const goal = goals.findIndex((element) => element.id === id)
    goals.splice(goal, 1)
    console.log(`🟢 deleteGoal()`)
    res.status(200).send(`🟢 deleteGoal()`)
  } catch (error) {
    console.log(`🔴 deleteGoal(): ${error}`)
    res.status(400).send(`🔴 deleteGoal(): ${error}`)
  }
}

let inspireQuotes = {}
export async function fetchInspireQuotes(req, res) {
  // fetch quotes from web
  try {
    const res = await axios(
      'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
    var quote =
      res.data.quotes[Math.floor(Math.random() * res.data.quotes.length)]
    console.log(quote)
    inspireQuotes = quote
  } catch (error) {
    console.log(`🔴 getQuote() => fetch(): ${error}`)
    res.status(400).send(`🔴 getQuote(): ${error}`)
  }
  console.log(`ffffff ${inspireQuotes}`)
  console.log(`🟢 getQuote() => fetch()`)
  res.status(200).send(inspireQuotes)
}

let programQuotes = {}
export async function fetchProgramQuotes(req, res) {
  // fetch quotes from web
  try {
    const res = await axios('https://raw.githubusercontent.com/fortrabbit/quotes/master/quotes.json')
    const quote = res.data[Math.floor(Math.random() * res.data.length)]
    // const quote = res.data
      console.log(quote)
    programQuotes = quote
    
  } catch (error) {
    console.log(`🔴 getQuote() => fetch(): ${error}`)
    res.status(400).send(`🔴 getQuote(): ${error}`)
  }
  console.log(`🟢 getQuote() => fetch()`)
  res.status(200).send(programQuotes)
}