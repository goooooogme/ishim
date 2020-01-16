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
    const posts = await Post.find().limit(5).skip(beforePost).sort({"data": -1});

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

router.get('/api/post/:id', async (req, res) => {
    const post = await Post.find({_id: req.params.id});
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.send(post);
})

module.exports = router;