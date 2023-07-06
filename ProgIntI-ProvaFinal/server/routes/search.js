var express = require('express');
var router = express.Router();

/* GET users listing. */
// Questão 2
router.get('/', function(req, res, next) {
  let url = req.body.url;
  let index = url.split("/u");
  let position = urls.indexOf(index[1]);
  if(position == undefined){
    res.status(404).send("URL não encontrada.");
  }
  res.send(urls[position]);
});

module.exports = router;
