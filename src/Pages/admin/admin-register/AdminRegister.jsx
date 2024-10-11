import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://pythonmaster42.pythonanywhere.com/admin_user/register/';

const AdminRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const Register = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          confirm_password: confirmPassword,
          phone_number: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        message.success('Регистрация прошла успешно!');
        navigate('/admin-password-type');
      } else {
        message.error(`Ошибка: ${data.detail || 'Не удалось зарегистрироваться'}`);
      }
    } catch (error) {
      message.error('Произошла ошибка при регистрации. Попробуйте позже.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='container' style={{ border: '1px solid silver', width: 500, marginTop: 200, padding: '50px 100px', borderRadius: 20 }}>
      <div className="texts" style={{ textAlign: 'center', marginBottom: 30 }}>
        <h1>Регистрация</h1>
      </div>
      <div className="inputs" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 30 }}>
        <Input placeholder='Имя' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Input placeholder='Фамилия' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Input placeholder='Номер телефона' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input.Password placeholder="Создайте пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input.Password placeholder="Напишите ещё раз пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <div className="buttons" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Button type='primary' onClick={Register}>Зарегистрироваться</Button>
        <Button type='link' onClick={() => navigate('/admin-login')}>Войти</Button>
      </div>
    </div>
  );
};

export default AdminRegister;
