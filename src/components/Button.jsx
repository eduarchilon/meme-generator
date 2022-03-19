import React from 'react'

function Button(props) {

    const {tag, type, id, className, evento} = props;
  return (
    <>
        <button type={type} id={id} className={className} onClick={evento}>{tag}</button>
    </>
  )
}

export default Button