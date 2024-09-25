import React, { useContext, useState } from 'react'
import { Layout } from 'antd';
import './SliderAdmin.css'
import index from '../../api-admin/index-admin'
import { CONTEXT } from '../../context/AppContext';
const { Sider } = Layout;

const siderStyle = {
    color: '#000',
    backgroundColor: '#fff',
};
const text = [
    { name: "Пылесос", category: "VacuumCleaner" },
    { name: "Холодильник", category: "Fridge" },
    { name: "Утюг", category: "iron" },
    { name: "Морозильник", category: "Freezer" },
    { name: "Телевизор", category: "Tv" },
    { name: "Аристон", category: "Ariston" },
    { name: "Вафельница", category: "waffli" },
    { name: "Блендер", category: "Blender" },
    { name: "Миксер", category: "Mikser" },
    { name: "Вытяжка", category: "Vitishka" },
    { name: "Стиральная машина", category: "Washing" },
    { name: "Кондиционер", category: "Condis" },
    { name: "Микроволновка", category: "Microvol" },
    { name: "Духовка", category: "Duhovka" },
    { name: "Газ плита", category: "Plita" },
    { name: "Соковыжималка", category: "Socovij" },
    { name: "Электрический плита", category: "Electriplita" },
    { name: "Электрический чайник", category: "Chainik" },
    { name: "Электрический нагреватель", category: "Nagrevatel" },
    { name: "Встраиваемая техника", category: "Vstoemyi" },
    { name: "Посудомоечная машина", category: "PosydaMashine" }
];

const SliderAdmin = () => {
    const [data, setData] = useState([]);
    const { setDataAdmin } = useContext(CONTEXT);

    const fetchAdmin = async (val) => {
        try {
            const response = await index.Card(val);
            if (response) {
                setData(response);
                setDataAdmin(response);
            } else {
                console.error("No data received from the API.");
            }
        } catch (error) {
            console.error("Error fetching admin data:", error);
        }
    };

    return (
        <Sider width="25%" style={siderStyle}>
            <div className="text-nav-admin">
                {text.map((el, index) => (
                    <span 
                        className="text-admin" 
                        key={index} 
                        onClick={() => {
                            fetchAdmin(el.category);
                            alert(el.category);
                        }}
                    >
                        {el.name}
                    </span>
                ))}
            </div>
        </Sider>
    );
}

export default SliderAdmin;
