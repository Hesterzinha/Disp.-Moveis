import './App.css';

function App() {

  const agora = new Date();
  const hora = agora.getHours();

  let mensagem = "u";

  if (hora < 12) {
      mensagem = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
      mensagem = "Boa tarde!";
  } else {
      mensagem = "Boa noite!";
  }

document.getElementById("mensagem").innerHTML = mensagem;

  return (
    <div className="atv10">
      <p id="mensagem"></p>
    </div>
  );
}

export default App;
