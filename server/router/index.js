const express = require('express');
const router = express.Router();
const Post = require('../schema/post');
const mongoose = require('mongoose');

router.get('/', async (req,res) => {
    const findAll = await Post.find({});
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.send(findAll);
});

module.exports = router;