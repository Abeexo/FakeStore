import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import "./ButtonContext.css"

interface ButtonProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Button = ({ setTheme }: ButtonProps) => {
  const theme = useContext(ThemeContext);
  
  const className = 'button-' + theme;
  
  const changeTheme = ()=> {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  }

  return (  
      <button onClick={changeTheme} className={className} ></button> 

  );
};

export default Button;
