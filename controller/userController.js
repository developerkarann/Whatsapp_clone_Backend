const User = require('../model/User')

const addUser = async(req, res) => {
   try {
      const userExist = await User.findOne({ sub: req.body.sub })
      if (userExist) {
         res.status(200).json({ msg: 'User already exist' })
         return;
      } 
      const newUser = new User(req.body)
      await newUser.save();
      return res.status(200).json(newUser)
      console.log(req.body)
      console.log("Hello")

   } catch (error) {
      console.log(error.message)
   }
}

const getUser = async (req, res) => {
   try {
      const users = await User.find({})
      return res.status(200).json(users)

   } catch (error) {
      console.log(error.message)
   }
}



module.exports = { addUser , getUser};