const mongoose = require('mongoose');

const uri = "mongodb+srv://pudji:blog@blog.vdhil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

const blog = require('./blog.js'); 

module.exports = {blog}; 