import React, { useContext, useEffect, useState } from 'react';
import './RightIm.css';
import index from '../../../api/index';
import { CONTEXT } from '../../../context/AppContext';

const RightIm = (props) => {
  const { text } = props;
  const [data, setData] = useState(null);
  const { setDataContext } = useContext(CONTEXT);
  const [categoryIn, setCategoryIn] = useState(text[0]?.category || 'Fridge'); 
  const [activeIndex, setActiveIndex] = useState(0); 

  const InsaGet = async (cate) => {
    try {
      const response = await index.Card(cate);
      console.log(response);
      setData(response);
      setDataContext(response); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    InsaGet(categoryIn); 
  }, [categoryIn]); 
  const handleClick = (category, index) => {
    setCategoryIn(category); 
    setActiveIndex(index); 
  };

  return (
    <div className='buttons-text'>
      {text.map((el, index) => (
        <h1
          onClick={() => handleClick(el.category, index)}
          key={index}
          className={activeIndex === index ? 'active' : ''} 
        >
          {el.name}
        </h1>
      ))}
    </div>
  );
};

export default RightIm;
