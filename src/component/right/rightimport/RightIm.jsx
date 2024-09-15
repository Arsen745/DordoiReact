import React, { useContext, useEffect, useState } from 'react';
import './RightIm.css';
import index from '../../../api/index';
import {CONTEXT} from '../../../context/AppContext'


const RightIm = (props) => {
    const { text } = props;
    const [data, setData] = useState(null);

    const {setDataContext} = useContext(CONTEXT)

    const InsaGet = async (cate) => {
        try {
            const response = await index.Card(cate);
            console.log(response);
            setData(null); 
            setData(response); 
            setDataContext(response)
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
                    onClick={() => {
                        alert(el.category);
                        InsaGet(el.category);
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
