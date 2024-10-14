import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import indexAdmin from '../../../api-admin/index-admin';
import IconButton from '@mui/material/IconButton';
import Input1 from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button1 from '@mui/material/Button';
import { Flex, Spin } from 'antd';

const contentStyle = {
  padding: 50,
  background: 'rgba(240, 240, 240, 0.7)',
  borderRadius: 4,
  height: '100vh',
  width: '200vh',
};

const AdminLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const login = async () => {
    if (!email.trim() || !password.trim()) {
      message.error('Заполните форму');
      return;
    }

    setLoading(true); // Начинаем загрузку
    try {
      const response = await indexAdmin.Login(email, password);
      setData(response);

      if (response.data.response === true) {
        message.success("Вход успешно выполнен");
        navigate('/admin');
      } else {
        message.error('Не правильные данные');
      }
    } catch (error) {
      setData(error);
      message.error('Не правильные данные');
    } finally {
      setLoading(false); // Завершаем загрузку
    }
  };

  return (
    <div
      className='container'
      style={{
        border: '1px solid silver',
        width: 400,
        marginTop: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: '100px 100px',
        borderRadius: 20,
      }}
    >
      <h1 style={{ color: 'black' }}>Войти</h1>

      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-search"
          label="Email"
          type="search"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
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
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <div className="buttons" style={{ display: 'flex', justifyContent: 'space-between', width: 250 }}>
        <Button type='link' onClick={() => navigate('/admin/forgotpassword')}>Забыли пароль</Button>
        <Button type='link' onClick={() => navigate('/admin-register')}>Регистрация</Button>
      </div>

      <div className="register" style={{ width: 230, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button1
          variant="contained"
          style={{ width: '100%' }}
          onClick={login}
        >
          Войти
        </Button1>
      </div>

      {loading && (
        <Flex gap="middle" vertical style={{ position: 'absolute', top: 0, left: 0, height: '100vh', width: '100%' }}>
          <Flex gap="middle" style={{ height: '100vh', width: '100%' }}>
            <Spin tip="Loading" size="large" style={{ height: '100vh', width: '100%', marginTop: '10%' }}>
              <div style={contentStyle} />
            </Spin>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default AdminLogIn;
