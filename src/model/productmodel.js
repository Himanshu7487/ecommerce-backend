const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productname:{
        type: String
    },
    price:{
        type: Number
    },
    imagefile:{
        type: String
    },
})
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product