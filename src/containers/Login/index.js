import { Form, Input,Button,Row,Col,Typography,Checkbox} from 'antd'
const { Title } = Typography;
import React, { useState,useEffect }  from 'react';
import Link from 'next/link'
import { Alert } from 'antd';


const Login=()=>{
    const [state,setState]=useState({
        correo:"",
        contraseña:"",
        total:""
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
            total:`No se pudo iniciar sesion con ${state.correo}-${state.contraseña}`
        })
    }
    return(
        <Form className="login-form">
            <Row justify="center" style={{paddingTop:40}}>
            <Col span="18" style={{textAlign:"center"}}>
            <Form.Item>
                <Title level={3}>Iniciar Sesion</Title>
            </Form.Item>
            </Col>
            <Col span="20">
                <Form.Item name="Correo">
                <Input placeholder="Correo Electronico" name="correo" onChange={handleInputChange}/>
                </Form.Item>
            </Col>
            <Col span="20">
                <Form.Item name="password">
                <Input type="password" placeholder="Contraseña" name="contraseña" onChange={handleInputChange}/>
                </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Guardar Usuario</Checkbox>
                </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item>
                <Button block onClick={datos} >Iniciar Sesion</Button >
                 </Form.Item>
            </Col>
            <Col span="18">
                <Form.Item>
               <Link href="http://localhost:3000/register"><Button block>Registrarse</Button></Link>
                </Form.Item>
            </Col>
            </Row>
            <Alert message={state.total} type="error" />
      </Form>
    )
}
export default Login
