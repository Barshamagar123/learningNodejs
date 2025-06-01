
const makeProductTable=(sequelize,Datatypes)=>{
const product=sequelize.define("products",{
    name: {
        type: Datatypes.STRING
    },
    price:{
        type: Datatypes.INTEGER
    },
    quantity:{
        type: Datatypes.INTEGER
    },
    description: {
        type: Datatypes.STRING
    },
})
return product
}
module.exports=makeProductTable
