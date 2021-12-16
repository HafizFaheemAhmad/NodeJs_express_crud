const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv/config');


//import Route
const postsRoute=require('./routes/posts');

// Middleware
app.use('/posts',postsRoute);
// app.use('/posts',()=>{
    //app.use('/user',userRoute);
//     console.log('Middleware is running');
// })

//how to start listing server
app.listen(3000);

//connec to db
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('connectedd to db')
);

//Routes
// app.get('/',(req,res)=>{
//     res.send('we are ready');
// });

// app.get('/posts',(req,res)=>{
//     res.send('we are posts');
// });