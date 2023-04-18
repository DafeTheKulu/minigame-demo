const express = require('express');
const router = express.Router();

/* GET homepage page. */
router.get('/', function(req, res, next) {
  
  res.render('homepage', { title: 'click to play' });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  
  res.render('index', { title: 'Number.io' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about team' });
});


/* GET WIN page. */
router.get('/win', function(req, res, next) {
  res.render('win', { title: 'YOU WIN' });
});

/* GET LOSE page. */
router.get('/lose', function(req, res, next) {
  res.render('lose', { title: 'YOU LOSE' });
});

module.exports = router;
