import React, { useEffect, useState } from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import index from '../api/index'
import CardOrder from '../component/CardOrder/CardOrder'

const OrderPage = () => {
  const [data, setData] = useState(null)
  const id = localStorage.getItem('ids')
  const value = localStorage.getItem('value')
  useEffect(() => {
    const fetchOrder = async () => {
      const response = await index.Order(value, id)
      setData(response)
    }
    fetchOrder()
  }, [])
  if(data === null) {
    return
    
  }
  return (
    <div className='container'>
      <Header />
      <CardOrder image={data.image} name={data.name} model={data.model} price={data.price}/>
      <Footer />
    </div>
  )
}

export default OrderPage