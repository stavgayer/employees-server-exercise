const express = require('express');
const router = express.Router();

// Example : 
// router.use('/users', require('./users'));

router.use('/employees' , require('./employees'));
module.exports = router;