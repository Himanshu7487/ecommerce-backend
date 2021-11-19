const MessageCard = require('../model/messageCardModel');

module.exports.createMessageCards = async (req,res)=>{
    const MessageCardData = req.body
    try{
        let messageCard = new MessageCard(MessageCardData)
        let result = messageCard.save();
        if(result){
            res.status(201).send('Message is added')
        }
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports.getMessageCards = async(req, res)=>{
    try{
        let cards = await MessageCard.find();
        if (cards){
            res.status(200).send(cards)
        }
    }
    catch(err){
        res.status(500).send(err)
    }
}