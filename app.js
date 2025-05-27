const express = require('express')
const app=express()
app.set("view engine", "ejs")//tells express js to set environment for ejs to run
app.get("/",function(request, response){
    response.render("home.ejs")
    // response.send("this is home page")
})
app.get("/about",function(request, response){
    response.render("hello/hi.ejs")
})
app.listen(3000,function(){
    console.log("backend has starated at port 3000")
})
