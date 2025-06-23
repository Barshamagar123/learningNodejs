makeAddTable=(sequelize,Datatypes)=>{
    const add=sequelize.define("adds",{
        task:{
            type: Datatypes.STRING
        },
      description:{
            type: Datatypes.TEXT
        },
        date:{
            type: Datatypes.DATEONLY
        },
        priority:{
            type: Datatypes.ENUM("Low","Medium","High"),
            defaultValue: "Low"
        },
        status:{
            type:Datatypes.ENUM("completed","pending"),
            defaultValue: "pending"
        },
        tag:{
            type: Datatypes.STRING
        },
    })

   return add 
}
module.exports=makeAddTable