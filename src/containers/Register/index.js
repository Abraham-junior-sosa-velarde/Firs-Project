import React,{ useState,useEffect } from 'react';
import { Form, Input,Button,Row,Col,Typography,Checkbox} from 'antd'
const { Title } = Typography;
import { Alert } from 'antd';

const Register=()=>{

    const [state,setState]=useState({
        correo:"",
        edad:"",
        nombre:"",
        apellido:"",
        total:""
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
            total:`Hola ${state.nombre}-${state.apellido}-${state.correo},${state.edad}`
        })
    }
    return(
        <Form name="normal_login" className="login-form">
        <Row justify="center" style={{paddingTop:20}}>
        <Col span="18" style={{textAlign:"center"}}>
        <Form.Item>
            <Title level={3}>Registrate</Title>
        </Form.Item>
        </Col>
        <Col span="20">
            <Form.Item label="Nombre">
            <Input name="nombre" placeholder="Nombre" onChange={handleInputChange}/>
            </Form.Item>
        </Col>
        <Col span="20">
            <Form.Item label="Apellido">
            <Input name="apellido" placeholder="Apellido" onChange={handleInputChange}/>
            </Form.Item>
        </Col>
        <Col span="14" >
            <Form.Item label="Edad">
            <Input name="edad"type="number" placeholder="Edad" onChange={handleInputChange}/>
            </Form.Item>
        </Col>
        <Col span="20">
            <Form.Item label="Correo">
            <Input name="correo"placeholder="Correo Electronico"onChange={handleInputChange} />
            </Form.Item>
        </Col>
        <Col span="8">
            <Form.Item>
            <Button block onClick={datos}>Crear cuenta</Button>
             </Form.Item>
        </Col>
        </Row>
        <Alert message={state.total} type="error" />
  </Form>
    )
}

export default Register;