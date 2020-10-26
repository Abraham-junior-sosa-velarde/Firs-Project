import React from 'react';
import {Row,Col } from 'antd'


const Wrapper =({children})=>{
    return(
           <Row justify="center" style={{height:380,marginTop:70}}>
               <Col span={7} style={{backgroundColor:"#1890ff",borderRadius:5}}>
                   {children}
               </Col>
           </Row>
    )
}

export default Wrapper;
