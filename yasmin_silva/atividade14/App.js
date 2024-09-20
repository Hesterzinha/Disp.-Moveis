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
            <button type="button" class="btn btn-outline-dark" onClick={altCorFu}>Alterar fundo da pagina</button>
          </div>
        </nav>
        <div class="container-fluid cp" style={{ backgroundColor: corFu }}>
        
        <br/>
        <form>
        <div class="mb-3">
          <label for="name" class="form-label">Usuario:</label>
            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="name" />
        </div>
        <div class="mb-3">
          <label for="senha" class="form-label">Senha:</label>
            <input type="password" class="form-control" id="senha" />
        </div>
        <button id="button" type="submit" class="btn btn-outline-danger">Entrar</button>
      </form>

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
