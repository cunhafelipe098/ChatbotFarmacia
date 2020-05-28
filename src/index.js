const Express = require('express')

const app = new Express()

const controller = require('./controller/controller')

app.use(Express.json())

app.get('/', controller.serviceCall )
app.post('/', controller.serviceCall )

module.exports = app
