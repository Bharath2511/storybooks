const express = require('express');
const router = express.Router();

//stories index
router.get('/',(req,res)=>{
    res.render('stories/index')
})

//add stories
router.get('/add',(req,res)=>{
    res.render('stories/add')
})

module.exports = router