const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type: String,
        index:{ unique: true}
    },
    email:{
        type:String
    },
    password:{
        type: String,
        required: true
    },
})
var User = mongoose.model('User', UserSchema);
module.exports = User