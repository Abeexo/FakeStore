import React from 'react';
import './Button.css'

type ButtonProps = {
    title?: string;
    onClick?: Function
}
export const Buttonn = ({onClick, title = 'Button'}: ButtonProps) => {
    
  return (
    <button 
    onClick={() => onClick && onClick()} 
    className='btn btn-primary sample'>{title}
    </button>
  )
}
