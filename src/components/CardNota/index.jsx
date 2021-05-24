import React from 'react';
import Card from 'react-bootstrap/Card'

function CardNota(props) {
    return(
        <Card>
        <Card.Header as="h5">{props.titulo}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.texto}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardNota;