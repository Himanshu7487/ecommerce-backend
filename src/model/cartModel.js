const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    productname:{
        type: String
    },
    price:{
        type: Number
    },
    imagefile:{
        type: String
    },
    userId:{
        type: String
    },
    quantity:{
        type: Number
    }
    
})
var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart