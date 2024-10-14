import React, { useState } from 'react'
import { Layout, Button, Drawer, Form, Input, Row, Select, Space, Col, DatePicker, Upload } from 'antd';
import { SiLogitech } from "react-icons/si";
import { IoMdSettings } from "react-icons/io"
import { CiTimer } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { PlusOutlined } from '@ant-design/icons';
import { MdHelp } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import './HeaderAdmin.css'
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Header } = Layout;
const headerStyle = {
    textAlign: 'center',
    height: 150,
    backgroundColor: '#fff',
    display: 'flex',
    padding: '0',
    paddingTop: '40px'
};

const HeaderAdmin = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const showDrawer2 = () => {
        setOpen2(true);
    };

    const onClose2 = () => {
        setOpen2(false);
    };
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    const navigate = useNavigate()
    return (
        <Header style={headerStyle}>
            <div className="content-header-admin" style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 20px' }}>
                <div className="left-content-header">
                    <div className="logo-header-admin">
                        <SiLogitech style={{ color: 'rgb(0, 81, 255)', fontSize: 120 }} />
                    </div>

                </div>
                <div className="right-content-header" style={{ display: 'flex', gap: 20 }}>
                    <Button type="primary" onClick={showDrawer2} icon={<PlusOutlined />}>
                        Добавить товар
                    </Button>
                    <Button type="primary" onClick={showDrawer}>
                        Настройки <IoMdSettings />
                    </Button>
                    <Button type="primary" onClick={() => {
                        navigate('/admin/createshop')
                    }}>
                        Создать Магазин <IoMdSettings />
                    </Button>
                    <Drawer title="Настройки" onClose={onClose} open={open}>
                        <div className="settings" style={{ height: '100%' }}>
                            <div className="history-orders">
                                <button><span>История заказов <CiTimer /></span></button>
                            </div>
                            <div className="view-active">
                                <button><span>Посмотреть Актив <MdAutoGraph /></span></button>
                            </div>
                            <div className="setting-data">
                                <button><span>Изменить данный <FaUserEdit /></span></button>
                            </div>
                            <div className="setting-help">
                                <button><span>Помощь <MdHelp /></span></button>
                            </div>
                            <div className="setting-logout">
                                <button><span>Выйти <CiLogout /></span></button>
                            </div>
                        </div>

                    </Drawer>
                    <Drawer
                        title="Добавить Новый Товар"
                        width={720}
                        onClose={onClose2}
                        open={open2}
                        styles={{
                            body: {
                                paddingBottom: 80,
                            },
                        }}
                        extra={
                            <Space>
                                <Button onClick={onClose2}>Отмена</Button>
                                <Button onClick={onClose2} type="primary">
                                    Добавить
                                </Button>
                            </Space>
                        }
                    >
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="name"
                                        label="Названия Товара"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Заполните названия товара',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Названия Товара" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="country"
                                        label="Страна Производство"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter url',
                                            },
                                        ]}
                                    >
                                        <Input
                                            style={{
                                                width: '100%',
                                            }}
                                            placeholder="Заполните Страна Производство"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="owner"
                                        label="Категория Товара"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Выберите категории товара',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Выберите категории товара">
                                            <Option value="xiao">Пылесос</Option>
                                            <Option value="mao1">Холодильник</Option>
                                            <Option value="mao2">Морозильник</Option>
                                            <Option value="mao3">Утюг</Option>
                                            <Option value="mao4">Вытяжка</Option>
                                            <Option value="mao5">КофеФарка</Option>
                                            <Option value="mao6">Чайник</Option>
                                            <Option value="mao7">Плита</Option>
                                            <Option value="mao8">Духовка</Option>
                                            <Option value="mao9">Микровалновка</Option>
                                            <Option value="mao10">Телефизор</Option>
                                            <Option value="mao11">Аристон</Option>
                                            <Option value="mao12">Кондицонер</Option>
                                            <Option value="mao13">Стиральный Машина</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="price"
                                        label="Цена Товара"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Заполните цена',
                                            },
                                        ]}
                                    >
                                        <Input
                                            style={{
                                                width: '100%',
                                            }}
                                            placeholder="Цена"
                                        />

                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item
                                        name="description"
                                        label="Описание/Характеристики Товара"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Заполните Описание',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea rows={4} placeholder="Описание" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                name="upload"
                                label="Загрузите Фото"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />}>Загрузить Фото</Button>
                                </Upload>
                            </Form.Item>
                        </Form>
                    </Drawer>
                </div>

            </div>

        </Header>

    )
}

export default HeaderAdmin