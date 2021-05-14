import React from 'react';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


import "./styles.scss";
import { FormControl, InputGroup } from 'react-bootstrap';

function Formulario() {
    return(
        <form>
            <header>
                <Alert variant="primary">Digite novas notas</Alert>
                <hr />
            </header>
            <p>Digite o título</p>
            <InputGroup className="mb-3">
                
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <hr />
            <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Button className="mt-4" variant="outline-success">Adicionar</Button>
        </form>
    );
}

export default Formulario;