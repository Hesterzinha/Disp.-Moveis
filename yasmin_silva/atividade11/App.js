import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Button } from 'bootstrap/dist/js/bootstrap.min.js';

function App() {

  const agora = new Date();
  const hora = agora.getHours();

  let mensagem;

    if (hora < 12) {
          mensagem = "Bom dia!";
    } 
    else if (hora >= 12 && hora < 18) {
          mensagem = "Boa tarde!";
    } 
    else {
          mensagem = "Boa noite!";
    }

  function alerta(){
      alert(mensagem);
  }
    
return(
  <div>
  <button onClick={alerta}>Clique em mim</button>
  </div>
);

}

export default App;
