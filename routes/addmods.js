var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req.query, res, next) {
  
  res.render('addmods', { title:'addmods', query: query});
  let query = req.query
  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
});

module.exports = router;
