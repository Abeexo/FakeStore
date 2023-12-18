import React from 'react'
import './Container.css'

type ContainerProps = {children?: JSX.Element}

export const Container = ({children}: ContainerProps) => {
  return (
    <div className='my-container w-20 mt-5'>
        {children}
    </div>
    
  )
}
