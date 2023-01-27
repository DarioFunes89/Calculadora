import React from "react";
import freecodecamplogo from '../Imagenes/FreeCodeCamp_logo.svg.png'

const Logo = () => {
    return (
    <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
         src={freecodecamplogo} 
         alt='logo de freecodecamp'/>
      </div>);
};

export default Logo;