var express = require('express');
var router = express.Router();
var urls = require('../utils/urls');

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  // URL
  let url = req.body.url;
  
}); */

/* POST URL to shorten. */
router.post('/', function(req, res, next) {
  let url = req.body.url;
  // Questão 1
  // Item A
  if (urls.length > 1) {
    if (url.length <= ("localhost:3000/u/".length + urls.length)) {
      res.status(400).send("A URL gerada é maior ou igual à original.");
      return;
    }
  }
  // Item B
  if (urls.includes(url)) {
    res.status(200).send("localhost:3000/u/" + urls.indexOf(url));
    return;
  }
  // Item C
  if (url == undefined) {
    res.status(400).send("Envie uma URL válida");
    return;
  }
  // Item D
  urls.push(url);
  res.status(200).send("localhost:3000/u/" + urls.length - 1);
});

module.exports = router;
