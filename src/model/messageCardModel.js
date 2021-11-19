const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = new Schema({
    name:{
        type:String
    },
    imgUrl:{
        type:String
    }
})
var MessageCard = mongoose.model('MessageCard', cardSchema)
module.exports = MessageCard