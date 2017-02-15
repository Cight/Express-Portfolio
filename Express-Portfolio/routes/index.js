var express = require('express');
var router = express.Router();

//GET home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

//GET about page
router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

//GET projects page
router.get('/project', function(req, res) {
    res.render('project', { title: 'Projects' });
});

//GET services page
router.get('/services', function(req, res) {
    res.render('services', { title: 'Services' });
});

//GET skills page
router.get('/skills', function(req, res) {
    res.render('skills', { title: 'Skills' });
});

//GET contact page
router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Contact' });
});



module.exports = router;
