import React from 'react';
import {Row,Col } from 'antd';
import Header from './../../components/Header'
import FooterP from './../../components/Footer';


const Wrapper =({children})=>{
    return(
        <>
            <Header />
                   {children}
           <FooterP />
        </>
    )
}

export default Wrapper;
