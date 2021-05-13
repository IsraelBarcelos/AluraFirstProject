import React from 'react';

function Formulario() {
    return(
        <form>
            <header>
                <p>Digite novas notas</p>
                <hr />
            </header>
            <p>Digite o título</p>
            <input type="text" />
            <hr />
            <textarea></textarea>
        </form>
    );
}

export default Formulario;