const express = require('express')
const cors = require('cors')
const controller = require('./controller') // require controller file, do this before setting endpoints, setup controller file first

const app = express()
const {getHouses, createHouse, updateHouse, deleteHouse} = controller // object destructuring, otherwise endpoint looks like 'app.get('/api/gethouses', controller.getHouses)'
// middleware
app.use(express.json())
app.use(cors())

//endpoints
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse) 
app.delete(`/api/houses/:id`, deleteHouse) // localhost:4004/api/houses/<id>

//server
app.listen(4004, () => {
    console.log(`Server running on port: 4004`)
})