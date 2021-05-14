import Formulario from './components/Formulario'
import ListaDeNotas from './components/ListaDeNotas'
import "./global.scss";

function App() {
  return (
    <div className="App">
      <main>
        <Formulario />
        <div className="traco" />
        <ListaDeNotas />
      </main>
    </div>
  );
}

export default App;
