import React from 'react';
import { Image } from 'antd'
import { Form, Input,Button,Typography} from 'antd'
import Link from 'next/link'
const { Title } = Typography;
const PasswordRecorder=()=>{

    return(
        <div style={{backgroundColor:"#F1F1F1",display:"flex",justifyContent:"center",paddingBottom:"5rem"}}>
        <div style={{display:"flex",backgroundColor:"#1890ff",marginTop:60,width:840,height:380,borderRadius:7,boxShadow:"1px 1px 3px"}}>
            <div>
               <div>
                   <Image width={460} height={380} src="passwordImg.jpg"></Image>
               </div>
            </div>
           <Form style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",textAlign:"center",paddingLeft:"2.3rem"}}>
           <Form.Item>
                <Title level={3} style={{color:"#EFEFEF",fontWeight:"900",paddingTop:"1.5rem"}}>Olvidaste tu contraseña?</Title>
            </Form.Item>
            <Form.Item name="Correo">
             <Input placeholder="Correo Electronico" name="correo"  required/>
            </Form.Item>
            <p style={{width:290,color:"#232020",fontSize:".9rem",fontWeight:"900"}}>Si olvidaste tu contraseña ingresa tu correo y te mandaremos un mensaje de recuperacion</p>
            <Form.Item>
            <Button block htmlType="submit" style={{backgroundColor:"#EBEBEB",marginTop:"1rem"}}>Enviar</Button>
            </Form.Item>
            <Form.Item>
            <Link href="/login"><Button block  style={{backgroundColor:"#EBEBEB"}}>Regresar</Button></Link>
            </Form.Item>
           </Form>
        </div>
        </div>
    )
}

export default PasswordRecorder;