const express = require('express');
const router = express.Router();
const Post = require('../schema/post');
const mongoose = require('mongoose');

router.get('/', async (req,res) => {
    const page = req.params.id;
    const beforePost = page*5 - 5;
    const posts = await Post.find().limit(5).skip(beforePost);
    const count = await Post.find();
    const postInfo = {
        countPage: count.length,
        posts
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.send(postInfo);
});

router.get('/page=:id', async (req, res) => {
    const page = req.params.id;
    const beforePost = page*5 - 5;
   // const post = await Post.find();
  //  console.log(post.reverse())
    const posts = await Post.find().limit(5).skip(beforePost);

    const count = await Post.find();
    const postInfo = {
        countPage: count.length,
        posts
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    
    res.send(postInfo);
})

module.exports = router;