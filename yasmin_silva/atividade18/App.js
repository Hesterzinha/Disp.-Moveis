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
        <br/>
        <br/>
        <br/>
        <table class="table">
      <thead>
        <tr>
          <td scope="col">Item</td>
          <td scope="col">Descrição</td>
          <td scope="col">Data</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Lista de exercício</td>
          <td>20/09/2024</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Seminario</td>
          <td>20/09/2024</td>

        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Trabalho</td>
          <td>20/09/2024</td>
        </tr>
      </tbody>
    </table>

      </div>
      <footer>
      <hr/>
        <nav>
          <ul>
            <li>Yasmin Hester Pereira da Silva</li>
            <li>yasmin.silva8@estudante.ifms.edu.br</li>
            <li>Data do inicio do projeto: 13/08/2024</li>
            <li>Data da entrega: 20/09/2024</li>
          </ul>
        </nav>
      </footer>
  </div>

  );
}

export default App;

