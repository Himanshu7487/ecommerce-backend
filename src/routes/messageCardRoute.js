const express = require('express')
const router = express.Router();
const messageCardRoute = require('../controller/messageCardController')

router.get("/", messageCardRoute.getMessageCards);
router.post("/createMessage", messageCardRoute.createMessageCards);

module.exports = router;