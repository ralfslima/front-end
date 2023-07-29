import { useEffect, useState } from "react"

// Função
export default function Exemplo02_effect(){

    // State
    const[texto, setTexto] = useState('Aprendendo o useEffect');

    // Ciclo de vida
    useEffect(() => {
        setTimeout(() => {
            setTexto('UseEffect executado!');
        }, 5000)
    })

    // Retorno
    return(<h1>{texto}</h1>)

}