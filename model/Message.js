const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    receiverId: {
        type: String
    },
    senderId: {
        type: String
    },
    text: {
        type: String
    },
    type:{
        type: String
    }
},
{
    timeseries: true
})

const Message = mongoose.model('messages', messageSchema)

module.exports = Message;
