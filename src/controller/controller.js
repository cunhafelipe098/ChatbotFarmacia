const service = require('../service/service')

let controller = {
  async testConnection (req, res) {
    res.json({ status: 'online' }) 
  },

  async chatbotmanager (req, res) {
    res.json({status: req.body })
  }
}

module.exports = controller
