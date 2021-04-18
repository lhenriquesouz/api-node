const express = require('express')
const routes = express.Router()


let db = [
    { '1': { Nome: 'CLiente 1', Idade: '20' } },
    { '2': { Nome: 'CLiente 2', Idade: '20' } },
    { '3': { Nome: 'CLiente 3', Idade: '20' } }
]

/*Buscar dados*/ 
routes.get('/', (req, res) => {
    return res.json(db)
})

// Inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)    
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let meuDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = meuDB
    return res.send(meuDB)
})

module.exports = routes