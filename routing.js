var ex=require('express')
var app=ex()
var r1=ex.Router()
var r2=ex.Router()
r1.get("/",function(req,res){
    res.write("<h1>this is home page</h1>")
    res.end()
})
r2.get("/abt",function(req,res){
    res.write("<h1>this is about page</h1>")
    res.end()
})
app.use(r1)
app.use(r2)
app.listen(5000)