const sequelize = require("../database/db");

makeLoginTable=(sequelize,DataTypes)=>{
    const Login=sequelize.define("login",{
        email:
        {
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
    })
    return Login
}
module.exports=makeLoginTable