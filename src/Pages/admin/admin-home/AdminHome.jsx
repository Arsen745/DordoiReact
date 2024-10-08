import React from 'react'
import { Layout } from 'antd';
import HeaderAdmin from '../../../component-admin/header-admin/HeaderAdmin';
import FooterAdmin from '../../../component-admin/footer-admin/FooterAdmin';
import SliderAdmin from '../../../component-admin/slider-admin/SliderAdmin';
import ContentAdmin from '../../../component-admin/content-admin/ContentAdmin';




const layoutStyle = {
    width: '100%',
    height: '100%',
};


const AdminHome = () => {
    return (
        <div className='container'>
            <Layout style={layoutStyle}>
                <Layout>
                    <SliderAdmin/>
                    <ContentAdmin/>
                </Layout>
                <FooterAdmin/>
            </Layout>
        </div>
    )
}

export default AdminHome