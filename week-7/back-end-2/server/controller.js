const { request } = require('express')
const db = require('./db.json')

let houseId = 4

// module signature
module.exports = {
    getHouses: (req, res) => {
res.status(200).send(db)
    }, 
    deleteHouse: (req, res) => {
        let index = db.findIndex(elem => elem.id === +req.params.id)
        db.splice(index, 1)
        res.status(200).send(db)
    },
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: houseId,
            address,
            price,
            imageURL
        }
        
          db.push(newHouse) // Adds the user that was sent from the front-end to our database.
          res.status(200).send('House successfully added.')
      }
      , 
    updateHouse: (req, res) => {
let { id } = req.params
let {type} = req.body
let index = db.findIndex(elem => elem.id === +req.params.id)

if (db[index].price > 0 && type === 'plus') {
db[index].price = +db[index].price + 10000
res.status(200).send(`Increased price.`)
} else if (db[index].price > 10000 && type === 'minus') {
    db[index].price = +db[index].price - 10000
    res.status(200).send(`Decreased price.`)
} else {
res.status(400).send(`Error.`)
}
    }
}
