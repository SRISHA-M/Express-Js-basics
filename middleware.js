const connect=require('connect')
var http=require('http')
var app=connect()
.use(function(req,res,next){
    console.log("data fetching")
    if(true){
        next()
    }
})
.use(function(req,res,next){
    console.log("validation")
    if(true){
        next()
    }
})
.use(function(req,res){
    console.log("end")
    res.end("hellow world")
})
http.createServer(app).listen(3000)