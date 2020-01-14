const mongoose = require('mongoose');



const post = mongoose.Schema({
    title: String,
    text: String,
    category: String,
    data: String,
    comments: Array
})

module.exports = mongoose.model("Post", post);