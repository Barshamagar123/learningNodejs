const { DataTypes } = require("sequelize")
const sequelize = require("../database/db")

const makeUserTable=(sequelize,DataTypes)=>{
const user=sequelize.define("blog",{
 name : {
    type: DataTypes.STRING
 }
})
}