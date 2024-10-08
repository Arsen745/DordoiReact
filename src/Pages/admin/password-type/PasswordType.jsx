import React from 'react'
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const PasswordType = () => {
    const onChange = (text) => {
        console.log('onChange:', text);
      };
      const sharedProps = {
        onChange,
      };
      const navigate = useNavigate()
    return (
        <div className='container' style={{width: 500, marginTop: 200, border: '1px solid silver', padding: '50px 100px', borderRadius: 20}}>
            <div className="text">
                <h4 style={{fontSize: 22, textAlign: 'center', marginBottom: 30}}>Мы отправили вам на почту 4 значный код</h4>
            </div>
            <div className="inputs" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                <Input.OTP length={4} {...sharedProps} />
            </div>
            <div className="resstart" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px'}}>
                <Button type='link'>Отправить ещё раз</Button>
                <p>1:32</p>
            </div>
            <div className="buttons" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button type='primary' onClick={() => {
                    navigate('/admin')
                }}>Подвердить</Button>
            </div>
        </div>
    )
}

export default PasswordType