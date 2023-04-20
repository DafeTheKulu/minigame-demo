const express = require('express');
const router = express.Router();

/* GET homepage page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'click to play' });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Number.io' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about team' });
});

module.exports = router;
