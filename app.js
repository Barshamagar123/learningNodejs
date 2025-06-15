const express = require('express')
const app=express()
const db=require("./database/db")
app.set("view engine", "ejs")//tells express js to set environment for ejs to run
app.use(express.urlencoded({extended: true}))
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
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
app.get("/gets-todo",async(request,response)=>{
  const datas = await db.adds.findAll()  //displayyyy 
 
response.render('./todo/gets-todo',{todos : datas})
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
app.post("/register-todo",async(request,response)=>{
    // console.log(request.body)
const {firstName, lastName, email, password, confirmPassword}=request.body
if(password!==confirmPassword){
    return response.send("password and confirm password donot match")
}
await db.registers.create({
firstname: firstName,
lastname: lastName,
email: email,
password: bcrypt.hashSync(password,10),
// confirmpassword: bcrypt.hashSync(confirmPassword,10)

})
response.send("registered succesfully")
})
app.post("/login-todo",async(request,response)=>{
    const {email,password}=request.body
    
    const registers =  await db.registers.findAll({
        where: {
            email:email
        }
    })
   if(registers.length == 0){
    response.send("not registered email")
   }
   else{
    //now check password first ---> plain password(form bata aako), hashed password already register garda table ma baseko
  const isPasswordMatch= bcrypt.compareSync(password, registers[0].password)
  if(isPasswordMatch){
    //token generation
const token=jwt.sign({name: "barsha" },"thisismysecretkey",{
    expiresIn:"20d"
})
response.cookie("token",token)
    response.redirect("/")
  }
  else{
    response.send("invalid credentails")
  }
   }
})
app.post("/add-todo",async(request,response)=>{
    const {task,description,date,priority,tag}=request.body
    await db.adds.create({
        task: task,
        description:description,
        date:date,
        priority: priority,
        tag: tag
    })
    response.render("home.ejs")
})
app.listen(3000,function(){
    console.log("backend has starated at port 3000")
})