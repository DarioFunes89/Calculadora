import './App.css';
import Logo from './Component/LogoFCC';
import Boton from './Component/Boton';
import Pantalla from './Component/Pantalla';
import Botonclear from './Component/Botonclear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [ input, setInput ] = useState("");

  const agregarInput = valor => {
    setInput (input + valor);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    } else {
      alert("Ingrese un valor")
    }
    
  }

  return (
    <div className='App'>
          <Logo />
      <div className='calculadora-contenedor'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Botonclear manejarClear={() => setInput(0)}>Clear</Botonclear>
        </div>
      </div>
    </div>
  );
}

export default App;
