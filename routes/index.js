var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '陳子樂', ID:'409418216'});
});

module.exports = router;
