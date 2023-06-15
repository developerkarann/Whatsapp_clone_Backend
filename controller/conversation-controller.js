const Conversation = require('../model/Conversation')

const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;

        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })
        if (exist) {
            return res.status(200).json('Conversation Already Exists')
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })
        await newConversation.save();
        return res.status(200).json('Conversation saved successfully')
        console.log("Conversation api is working")
    } catch (error) {
        res.status(500).json(error.message)
        console.log('Error While calling new conversation api in backend')
    }
}

const getConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        let convo = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })
        res.status(200).json(convo)
    } catch (error) {
        res.status(500).json(error.message)
        console.log('Error While calling get conversation api in backend')
    }
}



module.exports = { newConversation, getConversation };