const express = require('express');
const router = express.Router();
const Post = require('../schema/post')



router.post('/', (req, res) => {
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const date = new Date();
    const post = new Post(req.body);
    
    post.data = date.getDate()+' '+ month[date.getMonth()]+', '+ date.getFullYear();
    post.save();
    res.redirect('/')
})


module.exports = router;