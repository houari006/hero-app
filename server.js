require('dotenv').config();
const express = require('express');
const mongoose = require('./config/connect.js');
const path = require('path')
const heroRoute = require('./routes/hero.js');

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
//http://127.0.0.1:3000

app.use( '/hero' , heroRoute );


app.use( '/getimage' , express.static('./upload')  );

//static Public folder 
app.use(express.static(path.join(__dirname,'public/browser')))

const _PORT = process.env.PORT;
app.listen(  
    _PORT
    ,
    ()=>{
        console.log('server work !!!!');
    }
    
);