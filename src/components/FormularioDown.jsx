import React, { useContext } from 'react'
import TextContext from '../context/TextContext';

function FormularioDown(props) {

    const {onChangeLinea1, onChangeLinea2} = useContext(TextContext);

    const {id, className} = props;
    
    
  return (
    <>
        <form action="" id={id} className={className}>
          <input type="text" className='texto' placeholder="Linea 1" onChange={onChangeLinea1}/><br />
          <input type="text" className='texto' placeholder="Linea 2" onChange={onChangeLinea2}/><br />
        </form>
    </>
  )
}

export default FormularioDown