const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
     username: {
         type: String,
         required: true,
         unique: true
     }, 
     password: {
         type: String,
         min: 8,
         required: true
     },
     sessionTokens: [{
         token: String
     }],
 })
 
 // Pass hashing
 UserSchema.pre('save', function (next) {
     let user = this
     if (user.isModified('password')){
         bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(user.password, salt, (err, hassedPassword) => {
         user.password = hassedPassword
         next()
         })
     })
     // If password is not modified go next()
     } else { 
         next()
     }
 })
 
 const User = mongoose.model('User', UserSchema)
 module.exports = User