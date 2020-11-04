import { Form, Input,Button,Row,Col,Typography} from 'antd'
const { Title } = Typography;
import React, { useState,useEffect }  from 'react';
import Link from 'next/link'
import { Alert } from 'antd';
import {useDispatch,useSelector} from "react-redux";
import { UPDATE_USERS_STATES_START } from '../../redux/constants/Login'


const actionUpdateLogin=({username,password})=>({
    type:UPDATE_USERS_STATES_START,
    payload:{
        username,
        password,
    },
});
export const ReduxStore=()=>{
    const {username,password}=useSelector((store)=>store);
    const dispatch=useDispatch();

    const datos=()=>{
    dispatch({type:UPDATE_USERS_STATES_START,payload:{username,password}})
    }

    const handleInputChange=(e)=>{
   dispatch(actionUpdateLogin(
       {        
        [e.target.name]:e.target.value
       }
   ))
    }


/*const Login=()=>{
    const [state,setState]=useState({
        correo:"",
        contraseña:"",
        total:"",
        display:"none"
    })
    const handleInputChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const datos=(e)=>{
        setState({
            ...state,
            total:`No se pudo iniciar sesion con ${state.correo}-${state.contraseña}`,
            display:"block"
        })
    }
    useEffect(()=>{
        setTimeout(() => {
         setState({
             ...state,
             display:"none"
         })
        }, 2000);
        console.log("hola")
 },[state.total])*/
    return(
        <div style={{backgroundColor:"#F1F1F1",display:"flex",justifyContent:"center",paddingBottom:"5rem"}}>
        <div style={{backgroundColor:"#1890ff",marginTop:60,width:440,height:380,borderRadius:7,boxShadow:"1px 1px 3px"}}>
        <Form className="login-form" onSubmitCapture={datos}>
            <Row justify="center" style={{paddingTop:40}}>
            <Col span="18" style={{textAlign:"center"}}>
            <Form.Item>
                <Title level={3} style={{color:"#EFEFEF",fontWeight:"900"}}>Iniciar Sesion</Title>
            </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item name="Correo">
                <Input placeholder="Correo Electronico" name="username" onChange={handleInputChange} required/>
                </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item name="password">
                <Input type="password" placeholder="Contraseña" name="password" onChange={handleInputChange} required/>
                </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Link href="/recordar-contrasena"><label style={{color:"white",fontSize:"1.2rem"}}>Olvidaste tu contraseña?</label></Link>
                </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item>
                <Button block htmlType="submit" style={{backgroundColor:"#EBEBEB"}}>Iniciar sesion</Button>
                 </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item>
               <Link href="/register"><Button block  style={{backgroundColor:"#EBEBEB"}}>Registrarse</Button></Link>
                </Form.Item>
            </Col>
            </Row>
         <Alert /* message={state.total} style={{display:state.display}}*/ type="error" />
      </Form>
      </div>
      </div>
    )
}
export default ReduxStore
