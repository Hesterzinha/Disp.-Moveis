import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [corFu, setCorFu] = useState('#CCCFFF');
  const altCorFu = () => {
    setCorFu(corFu === '#CCCFFF' ? '#FFFFFF' : '#CCCFFF');
  };

  const agora = new Date();
  const hora = agora.getHours();

  let mensagem;

  if (hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  };

  useEffect(() => {
    alert(mensagem);
  }, []); 

  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary" backgrund-color="#ffffff" >
        <div class="container-fluid">
          <a class="navbar-brand">Fremeworks</a>
          <a id="corhome" class="nav-link active" aria-current="page" backgrund-color="#ffffff">Home</a>
          <a id="corcontato" class="nav-link" backgrund-color="#ffffff" >Contato</a>
          <button type="button" class="btn btn-outline-dark" onClick={altCorFu}>Alterar fundo da página</button>
        </div>
      </nav>
      <div class="container-fluid cp" style={{ backgroundColor: corFu }}>
        <br/>
        
      </div>
      <footer>
        <hr/>
        <nav>
          <ul >
            <li class="li">Yasmin Hester Pereira da Silva</li>
            <li class="li">yasmin.silva8@estudante.ifms.edu.br</li>
            <li class="li">Data do início do projeto: 13/08/2024</li>
            <li class="li">Data da entrega: 20/09/2024</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;