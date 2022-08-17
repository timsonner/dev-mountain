import crypto from 'crypto-js'

const users = []
const key = 'Secret123' // in production, this should be an environmental variable

export function login(req, res) {
  const { username, password } = req.body
  // validate db contains username from req.body.username
  const user = users.find((element) => element.username === username)
  // validate user exists
  // fail, user doesn't exist
  if (!user) {
    console.log(`🔴 login(): !user`)
    res.status(400).send(`🔴 login(): !user`)
    return
  }
  // success, user exists
  console.log(`🟢 login(): user`)

  // validate hash in db matches req.body.password
  // decrypt hashed password in database
  var decrypted = crypto.AES.decrypt(user.password, key).toString(
      crypto.enc.Utf8
      )
      // fail, passwords don't match
  if (decrypted !== password) {
    console.log(`🔴 login(): decypted !== password`)
    res.status(400).send(`🔴 login(): decypted !== password`)
    return
  }
  // success, passwords match
  console.log(`🟢 login(): decrypted === password`)
  res.status(200).send(`🟢 login(): decrypted === password`)
}

export function register(req, res) {
  const { username, password } = req.body
  // hash password with cryptojs as variable 'hash'
  var encrypted = crypto.AES.encrypt(password, key)
  // push req.body to local database
  try {
    users.push({ username, password: encrypted })
  } catch (error) {
    res.status(400).send(`🔴 register(): users.push()`)
  }
  res.status(200).send(`🟢 register(): users.push()`)
}
