const Message = require('../model/Message')
const Conversation = require('../model/Conversation')

const newMessage = async (req, res)=>{
    try {
        const NewMessage = new Message(req.body);
        await  NewMessage.save()
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text})
        return res.status(200).json('Message has been send successfully')
    } catch (error) {
        res.status(500).json(error.message)
        console.log('Error While calling get new message api in backend')
    }
}

const getMessage = async (req, res)=>{
    try {
      const message = await Message.find({conversationId: req.params.id})
        return res.status(200).json(message)
    } catch (error) {
        res.status(500).json(error.message)
        console.log('Error While calling get get message api in backend')
    }
}



module.exports = {newMessage, getMessage};