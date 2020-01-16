const express = require('express');
const router = express.Router();
const Post = require('../schema/post')



router.post('/post/:id', async (req, res) => {
    const comment = {
        author: req.body.author,
        text: req.body.text
    }

    const postes = await Post.find({_id: req.params.id});
    const com = postes[0].comments;
    com.push(comment)
    
    await Post.update({_id: req.params.id}, {comments: com},  {upsert: true})

    res.redirect('/')
})


module.exports = router;