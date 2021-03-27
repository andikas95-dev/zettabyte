const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 
const blogRoutes = require ('./routes/blogRouter')
const cors = require('cors');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.use('/blog', blogRoutes);

app.use(cors());

app.listen(3000, ()=>{
    console.log('server running on http://localhost:3000')
})