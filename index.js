const express = require('express')
const mongoose = require('mongoose');
const app = express()

const config = require('./config.json')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/api/users', require('./routes/api/users'))
app.use('/api/movies', require('./routes/api/movies'))

mongoose.connect('mongodb://root:root@localhost:27017/project?authSource=admin', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on('error', () => {
    console.error('Error with connection to Database')
})
mongoose.connection.once('open', () => {
    console.log('MongoDB successfully connected')
})

app.listen(config.port, config.host, () => {
    console.log(`API listening on ${config.host}:${config.port}`)
})