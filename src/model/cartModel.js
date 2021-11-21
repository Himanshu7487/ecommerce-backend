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
    }
    
})
var Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart