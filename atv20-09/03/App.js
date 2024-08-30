import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="atv03">
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Framework</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
              <a id="corhome" class="nav-link active" aria-current="page" href="#" backgrund-color="#ffffff">Home</a>
              <a id="corcontato" class="nav-link" href="#" backgrund-color="#ffffff" >Contato</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;