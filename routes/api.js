const express = require('express');
const router = express.Router(); //router object
const Crypto = require('../models/crypto');

//get a list of cryptocurrencies from the db
router.get('/cryptos', function(req, res, next){
  //mongoose method to find and take objects from db
  Crypto.find({}).then(function(crypto){
    res.send(crypto);
  })
});

//add the new cryptocurrency to the db
router.post('/cryptos', function(req, res, next){
  // creates new record of cryptocurrency object localy
  // and saves it in the mongoose db
  Crypto.create(req.body).then(function(crypto){
    res.send(crypto); //send  back the parameters if executed correctly
  }).catch(next);
});

//udpate a cryptocurrency in the db
router.put('/cryptos/:id', function(req, res, next){
  //mongoose method to update db
  Crypto.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
  Crypto.findOne({_id: req.params.id}).then(function(crypto){
  res.send({crypto});
    });
  });
});

//delete the cryptocurrency from the db
router.delete('/cryptos/:id', function(req, res, next){
  //mongoose method to delete by id
  Crypto.findByIdAndRemove({_id: req.params.id}).then(function(crypto) {
    res.send(crypto);
  });
});

//export this module to use in different files
module.exports = router;
