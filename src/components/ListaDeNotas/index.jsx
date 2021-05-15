import React from 'react';
import CardNota from '../CardNota';

function ListaDeNotas() {

    const lista = [
        {
            title: "Nota 1",
            text: "Texto 1"
        },
        {
            title: "Nota 2",
            text: "Texto 2"
        },
        {
            title: "Nota 3",
            text: "Texto 3"
        },
    ]

    return (
        <ul>
            {lista.map((obj, index) => {
                return (
                    <li key={index}>
                        <CardNota title={obj.title} text={obj.text} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ListaDeNotas;