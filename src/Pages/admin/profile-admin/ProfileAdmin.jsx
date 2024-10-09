import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Switch } from 'antd';
import { TimePicker } from 'antd';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';

const ProfileAdmin = () => {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const imgWindow = window.open(src);
    imgWindow?.document.write(`<img src="${src}" style="width: 400px; height: 400px;"/>`);
  };

  const onChangeSwitch = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const onChangeTime = (time) => {
    setValue(time);
  };

  return (
    <div className='container'>
      <div className="create-shop" style={{ paddingTop: 50 }}>
        <div className="text" style={{ textAlign: 'center', marginBottom: 30 }}>
          <h1 style={{ marginBottom: 20 }}>Уважаемый Арсен Добро Пожаловать в DORDOI STORE</h1>
          <p style={{ width: 700, margin: 'auto', marginBottom: 30 }}>
            Вы успешно зарегистрировались, теперь здесь вы можете создать вы можете только один магазин создавать. Правильно укажите ваши данные о магазине, потом можете изменить свои данные.
          </p>
          <div className="image" style={{ margin: 'auto',width: 100,}}>
            <ImgCrop
              rotationSlider
              aspect={1} 
              modalWidth={400} 
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                maxCount={1} 
              >
                {fileList.length < 1 && '+ Фото'}
              </Upload>
            </ImgCrop>
          </div>
        </div>
        {/* Остальная часть вашего компонента */}
        <div className="input" style={{ display: 'flex', width: 900, margin: 'auto', gap: 100, marginBottom: 30 }}>
          <div className="left" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField label="Названия магазин*" placeholder="Названия магазин" variant="standard" style={{ width: 400 }} />
            <TextField label="Адресс*" placeholder="Адресс" variant="standard" style={{ width: 400 }} />
            <TextField label="Телефон*" placeholder="Телефон" variant="standard" style={{ width: 400 }} />
            <TextField label="Ватсап Номер*" placeholder="Ватсап Номер" variant="standard" style={{ width: 400 }} />
          </div>
          <div className="right" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField label="Краткое описание" placeholder="Краткое описание" variant="standard" style={{ width: 400 }} />
            <TextField label="Адресс вашего сайта" placeholder="Ссылка на сайт" variant="standard" style={{ width: 400 }} />
            <TextField label="instagram ссылка" placeholder="instagram ссылка" variant="standard" style={{ width: 400 }} />
            <TextField label="Facebook ссылка" placeholder="Facebook ссылка" variant="standard" style={{ width: 400 }} />
          </div>
        </div>
        <div className="check" style={{ width: 900, margin: 'auto' }}>
          <div className="curier" style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            <Switch defaultChecked onChange={onChangeSwitch} />
            <h4>Личный Курьер*</h4>
          </div>
          <div className="time" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <TimePicker value={value} onChange={onChangeTime} placeholder='Начало' />
            <TimePicker value={value} onChange={onChangeTime} placeholder='Окончания' />
            <div className="check" style={{ display: 'flex', gap: 10 }}>
              <Switch defaultChecked onChange={onChangeSwitch} />
              <h4>Кругло Суточно*</h4>
            </div>
          </div>
        </div>
        <div className="descriptions" style={{ marginTop: 30 }}>
          <div className="input" style={{ width: 900, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField label="Описание Магазин*" placeholder="описания магазин" variant="standard" style={{ width: '100%' }} />
            <TextField label="Оплата*" placeholder="оплата" variant="standard" style={{ width: '100%' }} />
            <Button variant="contained" style={{ width: 300, margin: 'auto' }} onClick={() => navigate('/admin')}>
              Создать Магазин
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
