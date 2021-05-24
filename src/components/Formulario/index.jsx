import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


import "./styles.scss";
import { FormControl, InputGroup } from 'react-bootstrap';

function Formulario(props) {

    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");


    function salvaNota(e) {
        e.preventDefault();
        const objeto = {
            titulo: titulo,
            texto: texto
        }
        props.mudar(objeto)
        setTexto("");
        setTitulo("");
    }


    return(
        <form onSubmit={(e) => salvaNota(e)}>
            <header>
                <Alert variant="primary">Digite novas notas abaixo</Alert>
                <hr />
            </header>
            <InputGroup className="mb-3">
                
                <FormControl
                placeholder="Título"
                aria-label="Título"
                aria-describedby="basic-addon1"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                />
            </InputGroup>
            <hr />
            <InputGroup>
                <FormControl
                value={texto} 
                onChange={e => setTexto(e.target.value)} 
                id="start" 
                as="textarea" 
                aria-label="With textarea" 
                placeholder="Digite as informações" />
            </InputGroup>
            <Button type="submit" className="mt-4" variant="outline-success">Adicionar</Button>
        </form>
    );
}

export default Formulario;