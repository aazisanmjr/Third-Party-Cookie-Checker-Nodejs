var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
//use your own origin here
const origin = 'http://localhost:8001'
var app = express();
app.use(cors({
allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
credentials: true,
methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
origin: origin,
}))  
  app.use(bodyParser.json())
//   app.use(cors())
// cookieParser middleware
app.use(cookieParser());
  
// Route for setting the cookies
app.get('/setcookie', function  (req, res) {
  // Setting a cookie with key 'cookie_3' 
  // and value 'ture'
   res.cookie('cookie_3', 'true' ,{
        httpOnly: false, secure: true, sameSite: "none"
    })
    if(req.cookies["cookie_3"]){
        res.status(200).json({
        isSaved: true,
        cookie: req.cookies["cookie_3"]
    })
    }else{
        res.status(200).json({
        isSaved: false,
        cookie: req.cookies["cookie_3"]
    })
    }
    
})
  
// Route for getting all the cookies
app.get('/getcookie', function (req, res) {
    console.log(req.cookies)
    if(req.cookies){
       if(req.cookies["cookie_3"] !== null && req.cookies["cookie_3"] !== undefined){
        res.status(200).json({
            cookie: req.cookies["cookie_3"]
        });
       }else{
        res.status(400).json(false)
       }
    }else{
         res.status(400).json(false)
       }
    
})



app.listen(3000, '127.0.0.1',()=> {
  console.log('app is running on port 3000');
})