import React, { useContext, useEffect, useState } from 'react';
import './RightIm.css';
import index from '../../../api/index';
import { CONTEXT } from '../../../context/AppContext';

const RightIm = (props) => {
  const { text } = props;
  const [data, setData] = useState(null);
  const { setDataContext } = useContext(CONTEXT);
  const [activeIndex, setActiveIndex] = useState(null); 
  const InsaGet = async (cate, index1) => {
    try {
      const response = await index.Card(cate);
      console.log(response);
      setData(null);
      setData(response);
      setDataContext(null);
      setDataContext(response);
      setActiveIndex(index1); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
  }, [data]);
  return (
    <div className='buttons-text'>
      {text.map((el, index) => (
        <h1
          className={activeIndex === index ? 'active' : ''}
          onClick={() => {
            if (activeIndex === index) {
              setActiveIndex(null); 
            } else {
              InsaGet(el.category, index); 
            }
          }}
          key={index}
        >
          {el.name}
        </h1>
      ))}
    </div>
  );
};

export default RightIm;
