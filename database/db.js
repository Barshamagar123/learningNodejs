const {Sequelize,DataTypes} = require("sequelize")
require("dotenv").config() //yo gare paxi only hami dotenv ko data haru yo file ma access garnamilxa
// const makeBlogTable=require("./../models/blogModel")
const sequelize = new Sequelize(
    {
        database: process.env.database_name,
        username: process.env.database_username,
        password: process.env.database_password,
        port: 3306,
        host: process.env.database_host,
        dialect: "mysql"
        // database: "runningnodejs",
        // username: "root",
        // password: "",
        // port : "3306",
        // host: "localhost",
        // dialect: "mysql"  //kun database use gareko xa teskei name
    }
) // making object form sequelize class
// sequelize connect huna try gar banera vannu parxa
sequelize.authenticate()
.then(()=>{
    console.log("connected succesfully")
})
.catch((err)=>{
    console.log("error aayo",err)
})
//yo sab mathi database connection vayo

// for exporting
// let name="barsha"
// module.exports= name

const db={}
// db.name="barsha"
db.blogs=require("./../models/blogModel")(sequelize,DataTypes)
db.products=require("./../models/productModel")(sequelize,DataTypes)
db.registers=require("./../models/registerModel")(sequelize,DataTypes)
db.logins=require("./../models/loginModel")(sequelize,DataTypes)
// db.users=require("./../models/userModel")(sequelize,DataTypes)
sequelize.sync({alter:true}).then(()=>{
    console.log("migrated succesfully")
})
module.exports = sequelize
module.exports=db