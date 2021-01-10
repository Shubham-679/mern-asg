const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    url : {
        type : String,
        required : true
    },
    album : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Album'
      } 
})

const Photo = new mongoose.model('Photo' , photoSchema);
module.exports = Photo;