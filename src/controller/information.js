const service = require('../service/information')

let controller = {
  async testConnection (req, res) {
    res.json({ status: 'online' }) 
  },

  async chatbotmanager (req, res) {

    const data = req.body.queryResult
    data.fulfillmentText = req.body
    res.json( data )
  }
}

module.exports = controller
