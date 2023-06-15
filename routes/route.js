const express = require('express')
const router = express.Router();
const {addUser,getUser, } = require('../controller/userController')
const {newConversation, getConversation} = require('../controller/conversation-controller')
const {newMessage, getMessage} = require('../controller/messae-controller')
const {uploadFile, getFile} = require('../controller/image-contoller')
const User = require('../model/User')

const upload = require('../middleware/upload')




router.post('/add', addUser)
router.get('/users', getUser)

router.post('/conversation/add', newConversation)
router.post('/conversation/get', getConversation)

router.post('/message/add', newMessage)
router.get('/message/get/:id', getMessage)

router.post('/file/upload', upload.single('file') , uploadFile)
router.get('/file/:filename' , getFile)


module.exports = router;