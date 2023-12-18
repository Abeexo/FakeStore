import React, { Children, useContext } from 'react'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import "./Dropdowncategory.css"
import DropdownOrder from './DropdownOrder'
import { ThemeContext } from '../../App'

type ButtonProps = {
    onClick?: Function
    onClick2?: Function
    onClick3?: Function
    onClick4?: Function
    onClick5?: Function
    onClick6?: Function
    onClick7?: Function
}

export const DropdownCategory = ({onClick, onClick2,onClick3,onClick4,onClick5,onClick6,onClick7 }: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const className = 'drop-' + theme;
  
  return (
    <>
      <div className={className}>
        <Dropdown className='drop'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categoria
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item  onClick={() => onClick && onClick()}>Fragrances</Dropdown.Item>
            <Dropdown.Item onClick={() => onClick2 && onClick2()}>Groceries</Dropdown.Item>
            <Dropdown.Item  onClick={() => onClick3 && onClick3()}>Home Decoration</Dropdown.Item>
            <Dropdown.Item onClick={() => onClick4 && onClick4()}>Laptops</Dropdown.Item>
            <Dropdown.Item onClick={() => onClick5 && onClick5()}>Skincare</Dropdown.Item>
            <Dropdown.Item onClick={() => onClick6 && onClick6()}>Smartphone</Dropdown.Item>
            <Dropdown.Item onClick={() => onClick7 && onClick7()}>Tutto</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        </div>
        </>
  )
}

export default DropdownCategory