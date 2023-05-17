const router = require('express').Router(); 

const mainRoute = require('./api'); 
const homeRoute = require('./homeRoutes'); 
const postRoute = require('./postRoutes'); 

router.use('/api', mainRoute); 
router.use('/', homeRoute); 
router.use('posts', postRoute); 

module.exports = router; 