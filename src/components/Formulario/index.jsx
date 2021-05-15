import React from 'react';
import Button from 'react-bootstrap/Button'

import "./styles.scss";

function Formulario() {
    return (
        <form>
            <header>
                <p>Digite novas notas</p>
                <hr />
            </header>
            <p>Digite o título</p>
            <input type="text" />
            <hr />
            <textarea placeholder="Digite sua nota aqui!" />
            <Button variant="outline-success">Adicionar</Button>
        </form>
    );
}

export default Formulario;