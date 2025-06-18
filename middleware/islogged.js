const jwt=require("jsonwebtoken")
const isLogged=(request,response,next)=>{
    const token= request.cookies.token
    if(!token){
        response.send("please logged in")
    }
    else{
        jwt.verify(token,"thisismysecretkey",
            (error,result)=>{
                if(error){
                    response.send("invalid token")
                }
                else{
                    request.registerId=result.id
                    // console.log(result)
                    next()
                }
            }
            
        )
    }
}



module.exports=isLogged