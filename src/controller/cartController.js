const Cart = require('../model/cartModel');


module.exports.addToCart = async (req, res) => {
    try {
      let cart = new Cart({ ...req.body });
      await cart.save();
      res.status(200).send({ success: true, cart });
    } catch (error) {
      console.log(error);
      res.status(400).send({ success: false, message: error.message });
    }
  };

  module.exports.getAllCart = async (req, res) => {
    try {
      let data = await Cart.find({ userId: req.body.userId });
      res.status(200).send({ success: true, data });
    } catch (error) {
      console.log(error);
      res.status(400).send({ success: false, message: error.message });
    }
  };