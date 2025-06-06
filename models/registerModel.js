
makeRegisterTable=(sequelize,DataTypes)=>{
    const Register=sequelize.define("register",{
        firstname:
        {
            type:DataTypes.STRING
        },
        lastname:{
            type:DataTypes.STRING
        },
        email:
        {
type: DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        confirmpassword:{
type:DataTypes.STRING
        }
    })
    return Register
}
module.exports=makeRegisterTable
