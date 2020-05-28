const service = require('../service/service')

let controller = {
  async serviceCall (req, res) {
    res.json({ status: 'online' }) 
  },

  async manager (req, res) {
    const retorno = await service.simpleGet()
    res.json(retorno)
  }
}

module.exports = controller
