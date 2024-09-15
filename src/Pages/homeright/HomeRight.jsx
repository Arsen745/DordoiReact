import { useContext } from 'react';
import Card from './card/Card';
import './HomeRight.css';
import { CONTEXT } from '../../context/AppContext';

const HomeRight = () => {
  const { dataContext } = useContext(CONTEXT);
  console.log(dataContext, "-------context-----------");

  return (
    <div className='container card'>
      {dataContext === null ? (
        <h1>Пустой</h1>
      ) : (
        dataContext.map((el, index) => (
         <Card name={el.name} model={el.model} price={el.price} country={el.country} image={el.image} description={el.description} values={el.values} id={el.id}/>
        ))
      )}
    </div>
  );
};

export default HomeRight;
