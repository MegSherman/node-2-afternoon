const messages = []
let id = 0

module.exports = {
    createMessage: (req, res) => {
        const { text, time} = req.body
        messages.push ({ id, text, time })
        id++
        res.status(200).send(messages)
    },
    
    readMessages: (req, res) => {
        res.status(200).send(messages)
    },

    updateMessage: (req, res) => {
        const {text} = req.body
        const updateId = req.params.id

        if (updateId === -1) {
            return res.status(404).send('User was not found.')
        }

        const messageIndex = messages.findIndex (e => e.id = updateId)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(messages)
    },

    deleteMessage: (req, res) => {
        const deleteId = req.params.id

        if (deleteId === -1) {
            return res.status(404).send('User not found.')
        }

        const messageIndex = messages.findIndex (e => e.id == deleteId)
        messages.splice (messageIndex, 1)
        res.status(200).send(messages)
    }
}