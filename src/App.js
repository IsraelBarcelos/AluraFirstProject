import React, {useState} from 'react';

import Formulario from './components/Formulario';
import ListaDeNotas from './components/ListaDeNotas';
import "./global.scss";

function App() {

  const [elementos, setElementos] = useState([]);

  function setaElementoAPartirDoFilho(objeto) {
    
    setElementos( array => [...array, objeto])
  }

  return (
    <div className="App">
      <main>
        <Formulario mudar={setaElementoAPartirDoFilho} />
        <div className="traco" />
        
        <ListaDeNotas elementos={elementos} />
      </main>
    </div>
  );
}

export default App;
