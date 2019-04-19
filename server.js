const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const singerRoutes = require('./routes/singerRoutes')
const songRoutes = require('./routes/songRoutes')
require('./db/db.js')

app.listen(3000, () => {
  console.log('App is listening on 3000');
})

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.use('/songs', songRoutes)
app.use('/singers', singerRoutes)