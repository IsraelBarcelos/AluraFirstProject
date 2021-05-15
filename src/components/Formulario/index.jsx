import React from 'react';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


import "./styles.scss";

import { FormControl, InputGroup } from 'react-bootstrap';

class Formulario extends React.Component {

    constructor() {
        super();
        this.state = { titulo: '', texto: '' };
        this.notas = [];
    }

    setNota = (e) => {
        e.preventDefault();
        this.notas.push({titulo: this.state.titulo, texto: this.state.texto})
        console.log(this.notas)
        this.setState({titulo: '', texto: ''})
    }

    render() {
        return (
            <form onSubmit={this.setNota}>
                <header>
                    <Alert variant="primary">Digite novas notas</Alert>
                    <hr />
                </header>
                <p>Digite o título</p>
                <InputGroup className="mb-3">

                    <FormControl
                        placeholder="Título"
                        aria-label="Título"
                        aria-describedby="basic-addon1"
                        value={this.state.titulo}
                        onChange={ e => this.setState({ titulo: e.target.value })}

                    />
                </InputGroup>
                <hr />
                <InputGroup>
                    <FormControl
                        value={this.state.texto}
                        onChange={(e) => this.setState({ texto: e.target.value })}
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Digite aqui as informações"
                    />
                </InputGroup>
                <Button type="submit" className="mt-4" variant="outline-success">Adicionar</Button>
            </form>
        );
    }
}

export default Formulario;