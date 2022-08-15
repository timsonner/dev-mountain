const bcrypt = require('bcryptjs')

const users = []

module.exports = {
  login: async (req, res) => {
    console.log('Logging In User')
    console.log(req.body)
    const { username, password } = req.body
    const user = users.find(element => 
      element.username === username
    )
    if (!user) {
      res.send('🔴 !user')
      return
    }
    console.log(`🟢 user: ${user.username}`)

    const isValid = await bcrypt.compare(password, user.password)
console.log(`isvalid: ${isValid}`)
    if (!isValid) {
      res.send('🔴 !isValid')
      return
    }
    delete user.password // remove hashed password from user object
    // console.dir(user)
    console.log(`🟢 login(): Success`)
    res.status(200).send(user)
  },

  register: async (req, res) => {
    console.log('Registering User')
    const { username, email, firstName, lastName, password } = req.body // front end sent these, grab them
    const hash = await bcrypt.hash(password, 12) // >= 12 is owasp recomendation for saltiness
    const user = { username, email, firstName, lastName, password: hash}
    console.log(user)
    users.push(user) //asign hashed password as password for user object
    // console.dir(user)
    console.log(`🟢 register(): Success`)
    res.status(200).send(user)
  },
}
