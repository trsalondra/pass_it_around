const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall<br><a href = http://localhost:${port}/98>take one down, pass it around</a> `)
    // res.put(bottleNum--)
})

app.get('/0', (req, res) => {
    res.send(`0 Bottles of beer on the wall<br><a href = http://localhost:${port}/>take one down, pass it around</a>`)
}) 

app.get('/:bottleNum', (req, res) => {
    let nextBottle = req.params.bottleNum - 1
    res.send(`${req.params.bottleNum} Bottles of beer on the wall<br><a href = http://localhost:${port}/${nextBottle}>take one down, pass it around</a> `)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
