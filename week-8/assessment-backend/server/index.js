// this file sets up the routes, sets up the express app, and assigns the functions in the controller to certain endpoints
// when the front hits here, send it to the controller
import express, {json} from 'express'
import cors from 'cors'
import {getGoals, createGoal, updateGoal, deleteGoal} from './controller.js'
import { getCompliment, getFortune } from './controller.js';




const app = express()
// middleware
app.use(json())
app.use(cors())

// endpoints
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get('/api/goals', getGoals)
app.post('/api/goals', createGoal)
app.put('/api/goals/:id', updateGoal) 
app.delete(`/api/goals/:id`, deleteGoal) 

// server
const port = 4000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})