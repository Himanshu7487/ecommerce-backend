const express = require('express');
const multer = require('multer');
const router = express.Router();
const productRoute = require('../controller/productcontroller');
const multerMiddleware = require('../middleware/multerMiddleware');

router.get("/", productRoute.getAllProduct);
 router.get("/get", productRoute.getProductById);
 router.post('/add', multerMiddleware.single('imagefile'), productRoute.createProduct);
 router.put('/update/:id', productRoute.updateProduct);
 router.delete('/delete/:id', productRoute.deleteProduct);

module.exports = router;