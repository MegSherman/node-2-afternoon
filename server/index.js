const express = require ('express')
const app = express ()
const ctrl = require ('./controllers/messages_controller')
const SERVER_PORT = 3001

app.use (express.json())

const baseUrl = "/api/messages"
app.post (baseUrl, ctrl.createMessage)
app.get (baseUrl, ctrl.readMessages)
app.put (`${baseUrl}/:id`, ctrl.updateMessage)
app.delete (`${baseUrl}/:id`, ctrl.deleteMessage)

app.listen (SERVER_PORT, () => {console.log (`Server running on port: ${SERVER_PORT}`)})