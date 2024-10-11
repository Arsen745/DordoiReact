import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const loginUrl = 'https://pythonmaster42.pythonanywhere.com/admin_user/login/';

const AdminLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        message.success('Вход выполнен успешно!');
        navigate('/admin'); // Замените на нужную страницу после успешного входа
      } else {
        message.error(data.detail || 'Ошибка при входе. Проверьте введенные данные.');
      }
    } catch (error) {
      message.error('Произошла ошибка при выполнении входа. Попробуйте позже.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='container' style={{ border: '1px solid silver', width: 400, marginTop: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '100px 300px', borderRadius: 20 }}>
      <h1 style={{ color: 'black' }}>Войти</h1>
      <Input
        style={{ width: 300 }}
        placeholder='Напишите Email...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input.Password
        placeholder="Напишите пароль..."
        style={{ width: 300 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: 300 }}>
        <Button type='primary' onClick={login}>Войти</Button>
        <Button type='link'>Забыли пароль</Button>
      </div>
      <div className="register" style={{ width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button type='link' onClick={() => navigate('/admin-register')}>
          Создать магазин
        </Button>
      </div>
    </div>
  );
};

export default AdminLogIn;
