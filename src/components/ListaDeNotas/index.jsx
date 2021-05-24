import React from 'react';
import CardNota from '../CardNota';

function ListaDeNotas(props) {

    return(
        <ul>
          {props.elementos.map( (elemento, index) => {
            return(
              <li key={index}>
                <CardNota titulo={elemento.titulo} texto={elemento.texto} />
              </li>
            )
          })}
        </ul>
    );
}

export default ListaDeNotas;