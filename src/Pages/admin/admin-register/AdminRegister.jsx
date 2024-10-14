import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import indexAdmin from '../../../api-admin/index-admin';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input1 from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button1 from '@mui/material/Button';
import { Flex, Spin } from 'antd';

const contentStyle = {
  padding: 50,
  background: 'rgba(240, 240, 240, 0.7)',
  borderRadius: 4,
  height: '100vh',
  width: '200vh',
};
const content = <div style={contentStyle} />;

const AdminRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const Register = async () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !phoneNumber.trim()
    ) {
      message.error('Заполните все поля');
      return;
    }

    if (password !== confirmPassword) {
      message.error('Пароли не совпадают');
      return;
    }

    setLoading(true); // Начинаем загрузку

    try {
      const response = await indexAdmin.Register(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber
      );

      if (response.data.response === true) {
        message.success(
          'Пользователь успешно зарегистрирован. Проверьте вашу электронную почту для получения кода активации.'
        );
        navigate('/admin-password-type');
      } else {
        message.error('Ошибка: неверные данные');
      }
    } catch (error) {
      console.log(error);
      message.error('Ошибка: проверьте введённые данные');
    } finally {
      setLoading(false); // Останавливаем загрузку
    }
  };

  return (
    <div
      className='container'
      style={{
        border: '1px solid silver',
        width: 500,
        marginTop: 200,
        padding: '50px 100px',
        borderRadius: 20,
      }}
    >
      <div className="texts" style={{ textAlign: 'center', marginBottom: 30 }}>
        <h1>Регистрация</h1>
      </div>
      <div className="inputs" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 30 }}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            style={{ width: 300 }}
            label="Имя"
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            style={{ width: 300 }}
            label="Фамилия"
            variant="standard"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            style={{ width: 300 }}
            label="Телефон номер"
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            style={{ width: 300 }}
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <FormControl variant="standard" style={{ width: 300 }}>
          <InputLabel htmlFor="standard-adornment-password">Создайте пароль</InputLabel>
          <Input1
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl variant="standard" style={{ width: 300 }}>
          <InputLabel htmlFor="standard-adornment-password">Напишите ещё раз пароль</InputLabel>
          <Input1
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="buttons" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <Button1 variant="contained" style={{ width: '100%' }} onClick={Register}>
          Зарегистрироваться
        </Button1>
        <Button type='link' onClick={() => navigate('/admin-login')}>
          Войти
        </Button>
      </div>
      {loading && (
        <Flex gap="middle" vertical style={{ position: 'absolute', top: 0, left: 0, height: '100vh', width: '100%' }}>
          <Flex gap="middle" style={{ height: '100vh', width: '100%' }}>
            <Spin tip="Loading" size="large" style={{ height: '100vh', width: '100%', marginTop: '10%' }}>
              {content}
            </Spin>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default AdminRegister;
