import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};


const FooterAdmin = () => {
  return (
    <Footer style={footerStyle}>Футер</Footer>

  )
}

export default FooterAdmin