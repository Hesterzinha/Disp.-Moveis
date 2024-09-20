import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="atv07">   

      <div className="table-container">
        <div className="table-row">
          <div className="table-cell">Item:</div>
          <div className="table-cell">Descrição:</div>
          <div className="table-cell">Data da Atividade:</div>
        </div>
        <div className="table-row">
          <div className="table-cell">1</div>
          <div className="table-cell">Lista de exercício</div>
          <div className="table-cell">20/09/2024</div>
        </div>
        <div className="table-row">
          <div className="table-cell">2</div>
          <div className="table-cell">Seminario</div>
          <div className="table-cell">20/09/2024</div>
        </div>
        <div className="table-row">
          <div className="table-cell">3</div>
          <div className="table-cell">Trabalho</div>
          <div className="table-cell">20/09/2024</div>
        </div>
      </div>
    </div>
  );
}

export default App;
