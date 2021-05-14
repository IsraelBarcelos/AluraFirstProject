import React from 'react';
import Card from 'react-bootstrap/Card'

function CardNota(props) {
    return(
        <Card>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardNota;