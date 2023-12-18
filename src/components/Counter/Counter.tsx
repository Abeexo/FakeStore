import React, { useState } from 'react'
import { Buttonn } from '../CustomButton/Button';

export const Counter = () => {
    console.log('Sono entrato nel counter');
    const [x, setX] = useState(3); //  setX (s: number) => void
    const [y, setY] = useState<"pippo" | "caio">("pippo"); // setY (s: string) => void
 
  


  return (
    <>
    <div>Counter: {x}</div>
    <div>Y: {y}</div>
    
    <Buttonn onClick={() => setX(x + 1)}></Buttonn>
    <Buttonn title='toggleY' onClick={() => setY(y === "pippo" ? "caio": "pippo")}></Buttonn>
    <Buttonn title='log' onClick={() => console.log("ciao")}></Buttonn>
    </>
  )
}
