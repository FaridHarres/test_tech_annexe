var express = require('express');
var router = express.Router();
var request = require('sync-request');




// route interrogation de l'api
router.post('/result-api', function(req, res, next) {
  var requete = request("GET",`https://api.genderize.io?name=${req.body.firstname}`);
  var dataAPI = JSON.parse(requete.body)
  res.json( {dataAPI  });
});


module.exports = router;
