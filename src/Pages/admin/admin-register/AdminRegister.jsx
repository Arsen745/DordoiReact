import React from 'react'
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const navigate = useNavigate()
  return (
    <div className='container' style={{border: '1px solid silver', width: 500, marginTop: 200, padding: '50px 100px', borderRadius: 20}}>
      <div className="texts" style={{textAlign: 'center', marginBottom: 30}}>
        <h1>Регистрация</h1>
      </div>
      <div className="inputs" style={{display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 30}}>
        <Input placeholder='Имя'/>
        <Input placeholder='Фамилия'/>
        <Input placeholder='Номер телефона'/>
        <Input placeholder='Email' type='Email'/>
        <Input.Password placeholder="Создайте пароль"/>
        <Input.Password placeholder="Напишите ещё раз пароль"/>
      </div>
      <div className="buttons" style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Button type='primary' onClick={() => {
          navigate('/admin-password-type')
        }}>Зарегистрироваться</Button>
        <Button type='link' onClick={() => {
          navigate('/admin-login')
        }}>Войти</Button>
      </div>
    </div>
  )
}

export default AdminRegister