
 const messages= [{user:"harry", text:"hey there!", added:new Date()}, {user:"john" , text:"hello harry !", added:new  Date()}]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to miniboard messages' , messages:messages});
});
 router.get("/new", (req,res,next)=>{
    res.render("form" , {title : "Welcome to miniboard messages"})

 })

  router.post("/new" , (req,res,next)=>{
     const messageuser=req.body.messageUser
     const  messagecontent=req.body.messageContent
      messages.push({user:messageuser, text:messagecontent,  added:new Date()})
       res.redirect("/")
  })
module.exports = router;
