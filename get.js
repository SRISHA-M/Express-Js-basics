var ex=require('express')
var app=ex()
app.get("/",function(req,res){
    res.write("this is home page")
    res.end()
})
app.get("/abt",function(req,res){
    res.write("this is about page")
    res.end()
})
app.listen(5000)