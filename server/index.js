const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const index = require('./router/index');
const add = require('./router/add')


const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use('/', index);
app.use('/', add);



const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://nefedov:183264@cluster0-wcn4h.mongodb.net/ishim', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, ()=> {
    console.log(`Server is run to ${PORT}`);
})
