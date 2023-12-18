import React, { Children, useContext } from 'react'
import Dropdown from 'react-bootstrap/esm/Dropdown'
import "./Dropdowncategory.css"
import { ThemeContext } from '../../App'

type ButtonProps = {
    onClick?: Function
    onClick2?: Function
}

export const DropdownOrder = ({ onClick, onClick2 }: ButtonProps) => {
  const theme = useContext(ThemeContext);
  const className = 'drop-' + theme;

    return (
      <div className="container3">
        <Dropdown className="drop">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Ordina
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onClick && onClick()}>Prezzo</Dropdown.Item>
            <Dropdown.Item onClick={() => onClick2 && onClick2()}>Categoria</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  export default DropdownOrder