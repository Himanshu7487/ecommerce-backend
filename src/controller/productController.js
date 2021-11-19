const Product = require('../model/productmodel');
module.exports.getAllProduct = async(req, res,next)=>{
    try{
        let product = await Product.find();
        res.status(200).send({success: true, product});
    }catch(error){
        console.log(error);
        res.status(400).send({success: false, message: error.message});
    }
}
module.exports.getProductById = async(req,res)=>{
    try{
        let product = await Product.findOne({_id: req.params.id})
        
         res.status(200).send({success:true, product});
    }catch(error){
        console.log(error);
        res.status(400).send({success: false, message: error.message});
    }
}
module.exports.createProduct= async(req,res)=>{
    try{
        const{productname, price, imagefile} = req.body;
        let product = new Product({productname, price, imagefile});
        let result = await product.save();
        res.send('product is saved '+ product);
    }catch(error){
        console.log(error);
    }
    // try{
    //     console.log("Add product req body is"+JSON.stringify(req.body));
    //     const {productname , price , imagefile} = req.body;
    //     let flag = await Product.find({productname: productname});
    //     console.log("Flag length is", flag.length);
    //     if(flag.length !==0){
    //         throw new ErrorHandler(404,'Product with same name already exist','warning')
    //     }
    //     else{
    //         let product = new Product({productname , price , imagefile});
    //         let result = await product.save();
    //         throw new ErrorHandler(404, 'product is saved','success') 
    //     }
    // }catch(error){
    //     console.log(error);
    // }
}


module.exports.updateProduct = async (req, res)=>{
    try{
        let product = await Product.findOne({_id: req.params.id})
        if(!product)
            res.send("id doesn't exist")
        let updatedproduct = {
            productname: req.body.productname,
            price: req.body.price,
            description: req.body.description
        }
        let result = await Product.updateOne({_id: req.params.id},updatedproduct);
        res.send({success:true, product:{_id: req.params.id}});
    }catch(error){
        res.status(400).send({success: false, message:error.message});
    }
}

module.exports.deleteProduct = async (request, response, next) => {
    console.log("ID = " + request.params.id)
    try {
        let result = await Product.deleteOne({ _id: request.params.id })

        response.status(200).json({ success: true, id: request.params.id });
    }

    catch (error) { console.log(error); }

}