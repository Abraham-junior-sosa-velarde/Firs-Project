import React,{ useState,useEffect } from 'react';
import { Form, Input,Button,Row,Col,Typography} from 'antd'
const { Title } = Typography;
import { Alert } from 'antd';

import {useDispatch,useSelector} from "react-redux";
import { UPDATE_DATES_REGISTER } from '../../redux/constants/Register'


const actionUpdateLogin=({firstName,lastName,age,country,city})=>({
    type:UPDATE_DATES_REGISTER,
    payload:{
        firstName,
    lastName,
    age,
    country,
    city,
    }
});
export const ReduxStore=()=>{
    const {username,password}=useSelector((store)=>store);
    const dispatch=useDispatch();

    const datos=()=>{
    console.log("Se ejecuto el dipatch");
    dispatch({type:UPDATE_DATES_REGISTER,payload:{username,password}})
    }

    const handleInputChange=(e)=>{
   dispatch(actionUpdateLogin(
       {        
        [e.target.name]:e.target.value
       }
   ))
    }

/*const Register=()=>{

    const [state,setState]=useState({
        correo:"",
        edad:"",
        nombre:"",
        apellido:"",
        total:"",
        position:"none"
    })
    const handleInputChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const datos=(e)=>{
        e.preventDefault()
        setState({
            ...state,
            total:`Hola ${state.nombre} ${state.apellido}
            Edad:,${state.edad}
            Correo:${state.correo}`,
            position:"block"
        })
    }
    useEffect(()=>{
           const clear=setTimeout(() => {
            setState({
                ...state,
                position:"none"
            })
           }, 2000);
           console.log("hola")
    },[state.position])
    */
    return(
        <div style={{backgroundColor:"#F1F1F1",display:"flex",justifyContent:"center",paddingBottom:"5rem"}}>
        <div style={{backgroundColor:"#1890ff",marginTop:60,width:440,height:380,borderRadius:7,boxShadow:"1px 1px 3px"}}>
        <Form name="normal_login" className="login-form" onSubmitCapture={datos}>
        <Row justify="center" style={{paddingTop:20}}>
        <Col span="18" style={{textAlign:"center"}}>
        <Form.Item>
            <Title level={3} style={{color:"#EFEFEF",fontWeight:"900"}}>Registro</Title>
        </Form.Item>
        </Col>
        <Col span="20">
            <Form.Item label="Nombre">
            <Input name="firstname" placeholder="Nombre" onChange={handleInputChange} required/>
            </Form.Item>
        </Col>
        <Col span="20">
            <Form.Item label="Apellido">
            <Input name="lastname" placeholder="Apellido" onChange={handleInputChange} required/>
            </Form.Item>
        </Col>
        <Col span="14" >
            <Form.Item label="Edad">
            <Input name="age"type="number" min="0" max="100" placeholder="Edad" onChange={handleInputChange} required/>
            </Form.Item>
        </Col>
        <Col span="19">
            <Form.Item label="Correo">
            <Input name="country"placeholder="Correo Electronico"onChange={handleInputChange} required/>
            </Form.Item>
        </Col>
        <Col span="8">
            <Form.Item>
            <Button block htmlType="submit" style={{backgroundColor:"#EBEBEB"}}>Crear cuenta</Button>
             </Form.Item>
        </Col>
        </Row>
        <Alert /*message={state.total} type="error" style={{display:state.position}} */ >
        </Alert>
     </Form>
  </div>
  </div>
    )
}

export default ReduxStore;