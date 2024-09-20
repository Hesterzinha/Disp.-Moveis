import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="atv02" class="m-5" >
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
  );
}

export default App;