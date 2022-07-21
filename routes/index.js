var express = require('express');
var router = express.Router();
var userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res ) {
  res.render('index', { title: 'Max-Loan' });
});

// POST page 
router.post('/register', function(req, res) {
  var usermodel = new userModel({
    name : req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  })
  usermodel.save();
  res.send(usermodel);
});

module.exports = router;
