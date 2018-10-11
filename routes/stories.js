const express = require('express');
const router = express.Router();
const {ensureAuthenticated,ensureGuest} = require('../helpers/auth')
const mongoose = require('mongoose')
const Story = mongoose.model('stories')
const User = mongoose.model('users')

//stories index
router.get('/',(req,res)=>{
    res.render('stories/index')
})

//add stories
router.get('/add',ensureAuthenticated,(req,res)=>{
    res.render('stories/add')
}) 

//process add stories
router.post('/',(req,res)=>{
    let allowComments;

    if(req.body.allowComments) {
        allowComments : true
    } else {
        allowComments : false
    }
    const newStory = {
        title : req.body.title,
        body : req.body.body,
        status : req.body.status,
        allowComments : allowComments,
        user : req.user.id
    }
    //creating our story
    new newStory(newStory)
    .save()
    .then(story => {
        res.redirect(`/stories/show/${story.id}`)
    })

   // console.log(req.body)
    //res.send('hello') 
})

module.exports = router