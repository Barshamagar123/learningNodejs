const express = require('express')
const app=express()
require("./database/db")
app.set("view engine", "ejs")//tells express js to set environment for ejs to run
// app.get("/",function(request, response){
//     let name="barsha"
//     response.render("home.ejs",{age : 23, name:"barsha"})
//     // response.send("this is home page")
// })
// app.get("/about",function(request, response){

//     response.render("about.ejs",{about: "about"})
// })
app.get("/",(request,response)=>{
    response.render("home.ejs")
})
app.get("/add-todo",(request,response)=>{
    response.render("./todo/add-todo")
})
app.get("/gets-todo",(request,response)=>{
response.render('./todo/gets-todo')
})
app.get("/update-todo",(request,response)=>{
response.render('./todo/update-todo.ejs')
})
app.get("/login-todo",(request,response)=>{
response.render('./authentication/login.ejs')
})
app.get("/register-todo",(request,response)=>{
    response.render('./authentication/register.ejs')
})

app.listen(3000,function(){
    console.log("backend has starated at port 3000")
})
