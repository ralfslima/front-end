import { useEffect, useState } from "react";

export default function Exemplo03_api(){

    // useState
    const [postagens, setPostagens] = useState([]);

    // useEffect
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(requisicao => requisicao.json())
        .then(retorno => setPostagens(retorno))

    });

    // Retorno
    return(
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>

            <tbody>
                {postagens.map(p => (
                    <tr>
                        <td>{p.userId}</td>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )

}