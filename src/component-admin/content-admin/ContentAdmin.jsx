import React, { useContext } from 'react';
import { Layout } from 'antd';
import { CONTEXT } from '../../context/AppContext';
import CardAdmin from './card-admin/CardAdmin';
const { Content } = Layout;

const contentStyle = {
    backgroundColor: '#fff',
    height: '100vh',
    overflowY: 'auto',
    padding: '0px 0px 20px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
};

const ContentAdmin = () => {
    const { dataAdmin } = useContext(CONTEXT);
    console.log(dataAdmin, '-----------context-----------');

    return (
        <Content style={contentStyle}>
            {dataAdmin.map(el => (
                <CardAdmin name={el.name} price={el.price} model={el.model} image={el.image} country={el.country} values={el.values} key={el.id} />
            ))}
        </Content>
    );
}

export default ContentAdmin;
