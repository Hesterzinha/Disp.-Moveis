import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <Link  to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                          <Link  to='/acai' class="nav-link active" aria-current="page" >Açaí</Link>
                        </li>
                        <li class="nav-item">
                          <Link  to='/receitas' class="nav-link active" aria-current="page" >Receitas</Link>
                        </li>
                        <li class="nav-item">
                          <Link  to='/sorvetes' class="nav-link active" aria-current="page" >Sorvetes</Link>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>

  );
}

export default Navbar;
