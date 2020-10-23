import React from 'react'

const IndexPages=()=>{
    return(
        <div style={{width:350,height:450,backgroundColor:"#2A8BF4",display:"inline-flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",marginLeft:500,marginTop:100,textAlign:"center",borderRadius:5,boxShadow:".5px 1px 6px black",fontFamily:"monospace"}}>
           <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
               <h2 style={{color:"white",fontSize:"1.5rem"}}>Correo electronico</h2>
                <input style={{height:25,width:270,border:0,borderRadius:5,boxShadow:".5px 1px 1.5px black"}} type="email" id="my-email"/>
           </div>
           <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
           <h2 style={{color:"white",fontSize:"1.5rem"}}>Contraseña</h2>
           <input style={{height:25,width:270,border:0,borderRadius:5,boxShadow:".5px 1px 1.5px black"}} type="password" id="my-pass"/>
           </div>
           <div>
               <input type="submit" style={{textdecoration:"none",width:"7.5rem",height:"2.5rem",backgroundColor:"white",border:0,boxShadow:".1px .2px 2px black",borderRadius:7,fontSize:"1rem",color:"#2A8BF4",fontWeight:700}} value="Ingresar"></input></div>
        </div>
    )
}
export default IndexPages
