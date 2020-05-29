const controller = require('./controller/information')

function defineDomain (req,res) {
  const intent = req.body.queryResult.intent.displayName
  
  switch (intent) {
    case 'informacoes':
      return controller.chatbotmanager (req,res)
    default:
      return res.json({error: "nonexistent domain" });
  }
}

module.exports = defineDomain
