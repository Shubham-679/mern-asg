const mongoose = require('mongoose');
const User = require('./userModel')

const albumSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    user : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
      }
})

const Album = new mongoose.model('Album' , albumSchema);
module.exports = Album;