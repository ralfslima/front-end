import { useEffect, useState } from "react"

export default function(){

    // useState
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);

    // useEffect
    useEffect(() => {
        obterEstados();
    }, [])

    // Função para obter os estados
    const obterEstados = async () => {
        const url = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');
        const requisicao = await url.json();
        setEstados(requisicao);
    }

    // Função pra obter as cidades
    const filtrarCidades = async (siglaUF) => {
        if(siglaUF !== 'Estados'){
            const url = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUF}?providers=dados-abertos-br,gov,wikipedia`)
            const requisicao = await url.json();
            setCidades(requisicao);
        }else{
            setCidades([]);
        }
    }

    // Retorno
    return(
        <div>
            {/* Estados */}
            <select onChange={e=>{filtrarCidades(e.target.value)}}>
                <option>Estados</option>
                {estados.map((e, indice) =>(<option key={indice}>{e.sigla}</option>))}
            </select>

            {/* Cidades */}
            <select>
                <option>Cidades</option>
                {cidades.map((e, indice) =>(<option key={indice}>{e.nome}</option>))}
            </select>
        </div>
    )

}

