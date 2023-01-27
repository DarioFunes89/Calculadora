import React from "react";
import '../Estilos/Botonclear.css'

const Botonclear = (props) => (
    <div className="boton-clear"
    onClick={() => props.manejarClear()}>
        {props.children}
    </div>
)

export default Botonclear 