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
        
        <label class=" atv17 m-5">
      <h1>Meu percurso acadêmico em Informática</h1>
      <br></br>
      <p>
      Meu percurso acadêmico em Informática tem sido um desafio constante. Apesar de preferir essa área, a curva de aprendizado se mostrou íngreme, exigindo muita dedicação e esforço. Comecei o ensino médio integrado com técnico em informática, onde me deparei com conceitos complexos que me exigiram persistência para aprender. Até então ainda tenho dificuldades, porém, penso em seguir na área.
      </p>
    </label>

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

