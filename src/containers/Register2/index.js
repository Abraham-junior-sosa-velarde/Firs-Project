import React,{ useState,useEffect } from 'react';
import {  Input,Button} from 'antd'
import { Alert } from 'antd';

const Register=()=>{
    const [state,setState]=useState({
        name:"",
        surname:"",
        Ci:"",
        age:0,
        country:"",
        city:"",
        display:"none"
    })
    const EventSubmit=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const Save=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            display:"block"
        })
    }
    useEffect(()=>{
        setTimeout(() => {
         setState({
             ...state,
             display:"none"
         })
        }, 10000);
        console.log("hola")
 },[state.display])


    return(
        <>
        <div style={{display:"flex",justifyContent:"center",paddingBottom:"5rem"}}>
        <div>
        </div>
        <div style={{backgroundColor:"#F1F1F1",marginTop:60,width:540,height:450,borderRadius:7,boxShadow:"1px 1px 3px",display:"flex",flexDirection:"column",justifyContent:"space-evenly",padding:"0 40px",textAlign:"center"}}>
            <div>
                <h1>FORMULARIO DE REGISTRO</h1>
            </div>
        <div style={{display:"flex"}}>
            <div>
                <label htmlFor="name">Nombre</label>
                <Input value={state.name} name="name" id="name" placeholder="Ingrese su nombre" onChange={EventSubmit}/>
            </div>
            <div>
            <label htmlFor="surname">Apellido</label>
            <Input value={state.surname} name="surname" id="surname" placeholder="Ingrese su nombre" onChange={EventSubmit}/>     
            </div>
        </div>   
        
        <div style={{display:"flex"}}>
            <div>
            <label htmlFor="Ci">Cedula de identidad</label>
            <Input value={state.Ci} name="Ci" id="CI" placeholder="Ingrese su cedula de identidad" onChange={EventSubmit}/>
            </div>
            <div>
            <label htmlFor="age">edad</label>
            <Input value={state.age} type="number" name="age" id="age" placeholder="Edad" min="1" max="120"onChange={EventSubmit}/>
            </div>
        </div>
        
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div>
            <label htmlFor="country">Seleccione su Pais</label>
            <select id="country" name="country" value={state.country} onChange={EventSubmit}>
                <option >Seleccione un valor</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Peru">Peru</option>
                <option value="Colombia">Colombia</option>
            </select>
            </div>
            <div>
            <label htmlFor="city">Seleccione su Ciudad</label>
            <select id="city" name="city" value={state.country} onChange={EventSubmit}>
                <option >Seleccione un valor</option>
                <option value="La paz">La paz</option>
                <option value="Cochabamba">Cochabamba</option>
                <option value="Tarija">Tarija</option>
            </select>
            </div>
        </div>
      <Input.Group>
      <Button type="primary"block onClick={Save}>Enviar </Button>
      </Input.Group>
      <Alert type="error" style={{display:state.display}}
       message={`Nombre:${state.name}
                 Apellido:${state.surname}
                Ci:${state.Ci}
                Edad:${state.age}
                Pais:${state.country}
                Ciudad:${state.city}`}/>
      </div>
      </div>
      </>
    )
}

export default Register;
