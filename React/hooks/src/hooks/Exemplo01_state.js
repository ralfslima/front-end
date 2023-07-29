import { useState } from "react";

// Função
function Exemplo01_state(){

    // State
    const [texto, setTexto] = useState('');

    // Retorno
    return(
        <div>
            <input type='text' placeholder="Digite algo..." onChange={e =>{ setTexto(e.target.value) }} />
            <p>{texto ? texto : 'Digite algo...'}</p> 
        </div>
    )

}

// Exportar
export default Exemplo01_state;

