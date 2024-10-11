import React, { useState } from 'react'
import { Input, Button, message } from 'antd';
import indexAdmin from '../../../api-admin/index-admin';
import { useNavigate } from 'react-router-dom';


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
                <h1 style={{ color: 'black' }}>Восстановить пароль</h1>
                <Input
                    style={{ width: 300 }}
                    placeholder='Напишите Email...'
                    onChange={handleEmail}
                />
                <div className="register" style={{ width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button type='primary' onClick={() => {
                        sendEmail()
                    }}>
                        Создать магазин
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword