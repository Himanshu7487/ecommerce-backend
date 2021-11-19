const express = require('express');
const router = express.Router();
const userRoute = require('../controller/usercontroller')

router.get("/", userRoute.getAllUser);
router.get("/get/:id", userRoute.getUserById);
router.post('/add', userRoute.createUser);
router.put('/update/:id', userRoute.updateUser);
router.delete('/delete/:id', userRoute.deleteUser);

module.exports = router;
