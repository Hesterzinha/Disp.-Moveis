import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
  <div className="atv06">    
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
  );
}

export default App;
