import express, { json } from "express"
import cors from "cors"

const app = express()
const port = 4004

app.use(json())
app.use(cors())

import { login, register } from "./controllers/auth.js"

app.post('/api/register', register)
app.post('/api/login', login)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})