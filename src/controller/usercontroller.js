const User = require('../model/usermodel');

module.exports.getAllUser = async(req, res,next)=>{
    try{
        let user = await User.find();
        res.status(200).send({success: true, user});
    }catch(error){
        console.log(error);
        res.status(400).send({success: false, message: error.message});
    }
}
module.exports.getUserById = async(req,res)=>{
    try{
        let user = await User.findOne({_id: req.params.id})
        // let user = await User.findById(id);
         res.status(200).send({success:true, user});
    }catch(error){
        console.log(error);
        res.status(400).send({success: false, message: error.message});
    }
}
module.exports.Login = async(req, res)=>{
    try {
        let user = await User.findOne({username: req.body.username})
        if(!user){
            res.status(400).send({success: false, message: "user not registered"})
        }else{
            if(req.body.password!=user.password){
                res.status(400).send({success: false, message: "incorrect password"})
            }else{
                res.status(200).send({success:true, user});
            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({success: false, message: error.message});
    }
}
module.exports.createUser= async(req,res)=>{
    try{
        const{username, email, password} = req.body;
        let user = new User({username, email, password});
        let result = await user.save();
        res.send('user is saved '+ user);
    }catch(error){
        console.log(error);
    }
}

module.exports.updateUser = async (req, res)=>{
    try{
        let user = await User.findOne({_id: req.params.id})
        if(!user)
            res.send("id doesn't exist")
        let updateduser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        let result = await User.updateOne({_id: req.params.id},updateduser);
        res.send({success:true, user:{_id: req.params.id}});
    }catch(error){
        res.status(400).send({success: false, message:error.message});
    }
}

module.exports.deleteUser = async (request, response, next) => {
    console.log("ID = " + request.params.id)
    try {
        let result = await User.deleteOne({ _id: request.params.id })

        response.status(200).json({ success: true, id: request.params.id });
    }

    catch (error) { console.log(error); }

}