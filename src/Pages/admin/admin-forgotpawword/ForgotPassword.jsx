import React, { useState } from 'react'
import { Input, Button, message } from 'antd';
import indexAdmin from '../../../api-admin/index-admin';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button1 from '@mui/material/Button';
import Box from '@mui/material/Box';



const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const sendEmail = async () => {
        if (email.trim().length === 0) {
            message.error('Заполните форма')
        } else {
            try {
                const response = await indexAdmin.resetPassword(email)
                console.log(response);
                message.success('Код отправлена на почту')
                navigate('/admin/forgotpassword/active')

            }
            catch {
                message.error('Такой Email не существует')
            }
        }
    }
    return (
        <div>
            <div className='container' style={{ border: '1px solid silver', width: 600, marginTop: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '100px 100px', borderRadius: 20 }}>
                <h1 style={{ color: 'black', marginBottom: 30 }}>Восстановить пароль</h1>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >        <TextField
                        id="standard-search"
                        label="Email"
                        type="search"
                        variant="standard"
                        onChange={handleEmail}
                        style={{width: 300}}
                        /></Box>
                <div className="register" style={{ width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button1 variant="contained" style={{ width: '100%' }}  onClick={() => {
                        sendEmail()
                    }}>Восстановить</Button1>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword