import React, { createContext, useState } from 'react'

const TextContext = createContext();

function TextProvider({children}){

    const [linea1, setLinea1] = useState('');
    const [linea2, setLinea2] = useState('');

    const onChangeLinea1 = function (evento) {
        setLinea1(evento.target.value)
        console.log(linea1)
    }

    const onChangeLinea2 = function (evento) {
        setLinea2(evento.target.value)
        console.log(linea2)
    }

    const data = {linea1, onChangeLinea1, linea2, onChangeLinea2}
    
    return(
        <TextContext.Provider value={data}>
            {children}
        </TextContext.Provider>
    );
}

export {TextProvider};
export default TextContext;