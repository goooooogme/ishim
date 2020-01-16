const mongoose = require('mongoose');



const post = mongoose.Schema({
    title: String,
    text: String,
    category: String,
    data: {
        type: Date,
        default: Date.now
    },
    comments: Array
})

module.exports = mongoose.model("Post", post);