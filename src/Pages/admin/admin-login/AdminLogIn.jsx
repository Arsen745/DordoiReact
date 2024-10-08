import React from 'react'
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminLogIn = () => {
    const navigate = useNavigate()
    return (
        <div className='container' style={{ border: '1px solid silver', width: 400, marginTop: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '100px 300px', borderRadius: 20 }} >
            <h1 style={{ color: 'black' }}>Войти</h1>
            <Input style={{ width: 300 }} placeholder='Напишите Email...' />
            <Input.Password placeholder="Напишите пароль..." style={{ width: 300 }} />
            <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between',width: 300 }}>
                <Button type='primary'>Войти</Button>
                <Button type='link'>Забыли пароль</Button>
            </div>
            <div className="register" style={{width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button type='link' onClick={() => {
                    navigate('/admin-register')
                }}>Создать магазин</Button>
        </div>
        </div >
    )
}

export default AdminLogIn