const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    }     
})

const User = new mongoose.model('User' , userSchema);
module.exports = User;