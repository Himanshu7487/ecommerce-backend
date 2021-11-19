const multer = require('multer');
// const {ErrorHandler} =require('./../')

const MIME_TYPES = ['image/jpg','image/png','image/jpeg']
const storage = multer.diskStorage({
    destination:(req, file,callback)=>{
        console.log("Request is");
        callback(null,'assets');
    },
    filename:(req,file,callback)=>{
        console.log(file,"this is file");
        let filename = file.originalname.split(' ').join('-');
        filename = filename.split('.');
        const fileExtension = filename.pop();
        filename =(`${filename.join('-')}-${Date.now()}.${fileExtension}`).toLowerCase();
        console.log("File Name is "+ filename);
        callback(null, filename);
    }
})
const fileFilterCB = (req, file, callback)=>{
    console.log("File type is "+file.mimetype);
    if(MIME_TYPES.includes(file.mimetype)){
        return callback(null, true);
    }
    callback(new ErrorHandler(404, 'Invalid image type (png/jpg)','error'))
}
module.exports = multer({storage:storage, fileFilter: fileFilterCB});