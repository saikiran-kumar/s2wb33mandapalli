var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.query.foo;
  res.render('addmods', { title: 'Addmods', query: query});
  let query = req.query
  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
});

module.exports = router;
