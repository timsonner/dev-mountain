// this file is where the frontend makes calls  to the routes or endpoints
const goalsURL = `http://localhost:4000/api/goals`

const getAllGoals = async () => {
  try {
    let res = await axios.get(goalsURL)
    res.data.forEach((element) => {
      createGoalView(element)
    })
    console.log(`🟢 getAllGoals()`)
  } catch (error) {
    console.log(`🔴 getAllGoals(): ${error}`)
  }
}

const postGoal = async (object) => {
  try {
    const res = await axios.post(goalsURL, object)
    console.log(`🟢 postGoal()`)
  } catch (error) {
    console.log(`🔴 postGoal(): ${error}`)
  }
  location.reload()
}

const helperPostGoal = () => {
  const object = {
    id: uuidv4(),
    text: inputAddGoal.value,
  }
  try {
    postGoal(object)
    console.log(`🟢 helperPostGoal()`)
  } catch (error) {
    console.log(`🔴 helperPostGoal(): ${error}`)
  }
}

const putGoal = async (id, text) => {
  try {
    const url = goalsURL + '/' + id
    const res = await axios.put(url, { text: text })
    console.log(`🟢 putGoal()`)
  } catch (error) {
    console.log(`🔴 putGoal(${error})`)
  }
  location.reload()
}
const delGoal = async (id) => {
  try {
    const url = goalsURL + '/' + id
    const res = await axios.delete(url, id)
    console.log(`🟢 removeGoal()`)
  } catch (error) {
    console.log(`🔴 removeGoal(${error})`)
  }
  location.reload()
}

const docBody = document.querySelector('body')
const section = document.createElement('section')
docBody.appendChild(section)
const heading = document.createElement('h2')
heading.textContent = 'Goals List'
section.appendChild(heading)
const inputAddGoal = document.createElement('input')
section.appendChild(inputAddGoal)
const buttonAddGoal = document.createElement('button')
buttonAddGoal.textContent = 'Add a goal'
buttonAddGoal.addEventListener('click', helperPostGoal)
section.appendChild(buttonAddGoal)
section.style.display = 'flex'
section.style.flexDirection = 'column'
section.style.alignItems = 'center'

// listen for 'enter' key for submit
inputAddGoal.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    buttonAddGoal.click();
  }
});

const createGoalView = (goal) => {
  // goalView
  const goalView = document.createElement('div')
  // goalText
  const goalText = document.createElement('p')
  goalText.setAttribute('id', goal.id)
  goalText.textContent = goal.text
  goalView.appendChild(goalText)
  // inputEditText
  const inputEditText = document.createElement('input')
  inputEditText.placeholder = 'Edit this goal'
  // Execute a function when the user presses a key on the keyboard
  goalView.appendChild(inputEditText)
  // buttonEditText
  // const buttonEditText = document.createElement('button')
  // buttonEditText.textContent = 'Edit'
  // buttonEditText.addEventListener('click', toggleIsShowingHidden)
  // goalView.appendChild(buttonEditText)
  // helperPutGoal
  const helperPutGoal = () => {
    try {
      const id = goal.id
      const text = inputEditText.value
      console.log(`🟢 helperPutGoal()`)
      putGoal(id, text)
    } catch (error) {
      console.log(`🔴 helperPutGoal(): ${error}`)
    }
  }
  // buttonSubmitEditText
  const buttonSubmitEditText = document.createElement('button')
  buttonSubmitEditText.textContent = 'Submit'
  buttonSubmitEditText.addEventListener('click', helperPutGoal)
  goalView.appendChild(buttonSubmitEditText)
  // helperDelGoal
  const helperDelGoal = () => {
    try {
      const id = goal.id
      console.log(`🟢 helperDelGoal()`)
      delGoal(id)
    } catch (error) {
      console.log(`🔴 helperDelGoal(): ${error}`)
    }
  }
  // listen for 'enter' key for submit
  inputEditText.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      buttonSubmitEditText.click();
    }
  });
  // buttonDeleteGoal
  const buttonDeleteGoal = document.createElement('button')
  buttonDeleteGoal.textContent = 'Delete'
  buttonDeleteGoal.addEventListener('click', helperDelGoal)
  goalView.appendChild(buttonDeleteGoal)
  section.appendChild(goalView)
}

getAllGoals()
