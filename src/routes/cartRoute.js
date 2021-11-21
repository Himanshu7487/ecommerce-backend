const express = require('express');
const router = express.Router();
const cartRoute = require('../controller/cartController');

router.post("/", cartRoute.getAllCart);
router.post("/addCart", cartRoute.addToCart);

module.exports = router;


