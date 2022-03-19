import React, { useContext } from 'react'
import TextContext from '../context/TextContext';

function Previsualizador() {
    //el className='text' es de prueba para ver cuanto ocupara mi imagen

  const { linea1, linea2 } = useContext(TextContext);

  return (
    <div className='previsualizador' id='previsualizador'>
          <h5 className='textoPrevio' id='textoPrevio'>Vista previa de imagen</h5>
            <img id="img" alt=""/>
            <span className='textSpan' id='textSpan1'>{linea1}</span>
            <span className='textSpan' id='textSpan2'>{linea2}</span>
    </div>
  )
}

export default Previsualizador;