const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./userModel')
const jwt = require('jsonwebtoken')


const signUp = async (req, res) => {
     let user = new User(req.body)
     try {
         let alreadyExist = await User.findOne({ username : req.body.username})
         if (alreadyExist) throw "Username already exist"
         let createdUser = await user.save()
         res.json({createdUser, "msg":"User created successfully"})
     } catch (err){
         res.status(400).json(err)
     }
}

const login = async (req, res) => {
     try {
         let user = await User.findOne({ username : req.body.username})
         if (!user) throw "User doesn't exist"
         // Check password
         let passwordMatched = await bcrypt.compare(req.body.password, user.password)
         if (!passwordMatched) throw "Incorrect password"
         // Create JWT Token from User._id and add to User
         let token = await jwt.sign({_id : user._id.toHexString()}, 'CATeamOf5').toString()
         user.sessionTokens.push({token})    
         await user.save()
         // Send response with token in headers
         res.header('token', token).json(user)
     } catch (err){
         res.status(401).json(err)
     }
}

const logout = async (req, res) => {
     // Take token and user after authentication (from middleware)
     let token = req.token
     let user = req.user
     try {
         // Remove token from User tokens array
         await user.update({ $pull: { sessionTokens: { token } } })
         res.json('Successfull logout')
     } catch(err){
         res.status(400).json(err)
     }
}

module.exports = {
     signUp,
     login,
     logout
}
 