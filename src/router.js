const Express = require('express')
const app = new Express()

const controller = require('./controller/controller')

let domain

app.use(Express.json())
app.use((req,res,next) => {
  
  next()
})
app.get('/', controller.testConnection )
app.post('/', controller.chatbotmanager )

module.exports = app
