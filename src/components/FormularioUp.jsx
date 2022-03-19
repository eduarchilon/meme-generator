import React from 'react'
import Button from './Button';

function FormularioUp(props) {

    const {id, className} = props;

  
  return (
    <>
        <form action="#" id={id} className={className}>
          <input type="file" name="file" id="file" className='file' accept="image/png,image/jpeg"/>
          <Button tag="Eliminar" id="upload" className="upload" />
        </form>
    </>
  )
}

export default FormularioUp;