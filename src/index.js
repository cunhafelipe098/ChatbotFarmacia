const Express = require('express')
const app = new Express()
const controller = require('./controller/information')
const defineDomain = require('./router')

app.use(Express.json())

app
.get('/', controller.testConnection )
.post('/', defineDomain )

module.exports = app
