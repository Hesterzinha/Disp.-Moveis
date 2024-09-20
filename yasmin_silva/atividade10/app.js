import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

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

  return (
    <div className="atv10">
      <p>{mensagem}</p>
    </div>
  );
}

export default App;

