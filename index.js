const app = require('express')()
const bodyParser = require('body-parser')
const config = require('./config.json')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!')
})


app.listen(config.port, config.host, () => {
    console.log(`API listening on ${config.host}:${config.port}`)
})