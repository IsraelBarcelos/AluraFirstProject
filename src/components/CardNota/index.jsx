import React from 'react';
import Card from 'react-bootstrap/Card'

function CardNota() {
    return(
        <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardNota;