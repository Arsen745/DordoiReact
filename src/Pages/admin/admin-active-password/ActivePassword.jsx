import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import indexAdmin from '../../../api-admin/index-admin';

const ActivePassword = () => {
    const [otp, setOtp] = useState('')
    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };
    const handleActivation = async () => {
        if (!otp || otp.length < 4) {
          message.warning("Пожалуйства, введите 4-значный код")
          return;
        }
         try {
          const response = await indexAdmin.activCodePassword(otp)
          if(response.data.response === true) {
            message.success('Успешно было активация')
          }
          
         }
         catch(error) {
          message.error('Не правильный код попробуйте ещё раз')
         }
    
      }
    return (
        <div>
            <div className='container' style={{ width: 500, marginTop: 200, border: '1px solid silver', padding: '50px 100px', borderRadius: 20 }}>
                <div className="text">
                    <h4 style={{ fontSize: 22, textAlign: 'center', marginBottom: 30 }}>
                        Мы отправили вам на почту 4-значный код
                    </h4>
                </div>
                <div className="inputs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <Input
                        maxLength={4}
                        value={otp}
                        onChange={handleOtpChange}
                        placeholder="Введите код"
                        style={{ width: 200, textAlign: 'center' }}
                    />
                </div>
                <div className="resstart" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                    <Button type='link'>Отправить ещё раз</Button>
                    <p>1:32</p>
                </div>
                <div className="buttons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button type='primary' onClick={() => {
                        handleActivation()
                    }}>
                        Подтвердить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ActivePassword