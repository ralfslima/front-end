// Utilizando a API do ViaCEP, peça um CEP e retorne:
// Estado, Cidade, Bairro e Logradouro.

import { useState } from "react"

// Estado, Cidade, Bairro e Logradouro.
export default function Atividade01(){

    // useState
    const [cep, setCep] = useState();
    const [retornoCep, setRetornoCep] = useState([]);
    const [exibir, setExibir] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const buscarCep = async () => {
        try{
            const requisicao = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const converter = await requisicao.json();
            setRetornoCep(converter);
            setExibir(true);
            setMensagem('');
        }catch(e){
            setMensagem('Falha ao obter o CEP');
            setRetornoCep([]);
            setExibir(false);
        }
    }

    // Retorno
    return(
        <div>
            <input type="text" onChange={e => {setCep(e.target.value)}} />
            <button onClick={() => {buscarCep()}}>Buscar CEP</button>

            <hr />

            {mensagem ? mensagem : ''}

            {
            exibir 
            ?
            <div>
                <p>Estado: {retornoCep.uf}</p>
                <p>Cidade: {retornoCep.localidade}</p>
                <p>Bairro: {retornoCep.bairro}</p>
                <p>Logradouro: {retornoCep.logradouro}</p>
            </div> 
            : 
            ''
            }
        </div>
    )

}