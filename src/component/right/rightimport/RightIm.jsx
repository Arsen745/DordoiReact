import React from 'react'
import './RightIm.css'


const RightIm = (props) => {
    const {text} = props
  return (
    <div className='buttons-text'>
        {text.map((el, index) => {
            return (
                <h1 onClick={() => {
                    alert(el.category)
                }} key={index}>{el.name}</h1>
            )
        })}
    </div>
  )
}

export default RightIm