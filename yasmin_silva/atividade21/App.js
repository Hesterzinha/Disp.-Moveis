import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [corFu, setCorFu] = useState('#CCCFFF');
  const altCorFu = () => {
    setCorFu(corFu === '#CCCFFF' ? '#FFFFFF' : '#CCCFFF');
  };

  return (
    <div className="App">
        <nav class="navbar bg-body-tertiary" backgrund-color="#ffffff" >
          <div class="container-fluid">
              <a class="navbar-brand">Fremeworks</a>
              <a id="corhome" class="nav-link active" aria-current="page" backgrund-color="#ffffff">Home</a>
              <a id="corcontato" class="nav-link" backgrund-color="#ffffff" >Contato</a>
            <button type="button" class="btn btn-outline-dark" onClick={altCorFu}>Alterar fundo da pagina</button>
          </div>
        </nav>
        <div class="container-fluid cp" style={{ backgroundColor: corFu }}>
        <br/>
        <h3>Unidades curriculares 5º eríodo</h3>
      <ul>
              <li>Lingua Portuguêsa;</li>
              <li>Matematica;</li>
              <li>Física;</li>
              <li>Educação Física;</li>
              <li>Programação para Dispositivos Moveis;</li>
              <li>Redes de Computadores;</li>
              <li>Empreendedorismo e Inovação;</li>
              <li>Frameworks</li>
              <li>Química;</li>
              <li>Biologia;</li>
              <li>História;</li>
              <li>Metodologia de Pesquisa.</li>
      </ul>
      </div>
      <footer>
      <hr/>
        <nav>
          <ul >
            <li class="li">Yasmin Hester Pereira da Silva</li>
            <li class="li">yasmin.silva8@estudante.ifms.edu.br</li>
            <li class="li">Data do inicio do projeto: 13/08/2024</li>
            <li class="li">Data da entrega: 20/09/2024</li>
          </ul>
        </nav>
      </footer>
  </div>

  );
}

export default App;

