import React, { useContext, useEffect, useState } from 'react';
import './RightIm.css';
import index from '../../../api/index';
import { CONTEXT } from '../../../context/AppContext';

const RightIm = (props) => {
  const { text } = props;
  const { setDataContext, setClick, setCategoryClick } = useContext(CONTEXT);
  const [categoryIn, setCategoryIn] = useState(text[0]?.category); 
  const [activeIndex, setActiveIndex] = useState(0); 
  const [error, setError] = useState(null);

  const InsaGet = async (cate) => {
    try {
      const response = await index.Card(cate);
      setDataContext(response); 
      setError(null); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Ошибка загрузки данных"); 
    }
  };

  useEffect(() => {
    InsaGet(categoryIn); 
  }, [categoryIn]); 

  const handleClick = (category, index) => {
    setCategoryIn(category); 
    setActiveIndex(index); 
    setClick(false);
    setCategoryClick(true);
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
      {error && <div className="error-message">{error}</div>} 
    </div>
  );
};

export default RightIm;
