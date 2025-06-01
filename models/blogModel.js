// const sequelize=require("sequelize")
const makeBlogTable=(sequelize,Datatypes)=>{

const Blog = sequelize.define("blog",{
    title: {
 type : Datatypes.STRING
    },
    description: {
        type: Datatypes.STRING
    },
    age:{
        type: Datatypes.INTEGER
    },
    subtitle:{
        type: Datatypes.STRING
    }

})
return Blog
}
module.exports=makeBlogTable