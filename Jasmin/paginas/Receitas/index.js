import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from '../Navbar';

function Receitas() {
  return (
    <div class='container'>
      <Navbar/>

      <div class="row">
          <div class="col"></div>

          <div class="col-6">
            <h1>Bolo de café</h1>
          <p class="fs-2">Ingredientes</p>
              <ul class="list-group list-group">
                <li class="list-group-item">3 ovos</li>
                <li class="list-group-item">1 xícara (chá) de óleo</li>
                <li class="list-group-item">1 xícara (chá) e meia de açúcar refinado</li>
                <li class="list-group-item">1 xícara (chá) de água quente</li>
                <li class="list-group-item">6 colheres (sopa) de NESCAFÉ® solúvel Matinal</li>
                <li class="list-group-item">Meia xícara (chá) de chocolate em pó NESTLÉ® CHOCOLATERIA®</li>
                <li class="list-group-item">2 xícaras (chá) de farinha de trigo peneirada</li>
                <li class="list-group-item">1 colher (chá) de fermento em pó</li>
              </ul>   <br/>
          <p class="fs-2">Modo de preparo</p>    
              <ol class="list-group list-group-numbered">
                <li class="list-group-item">Em um liquidificador, bata os ovos, o óleo e o açúcar.</li>
                <li class="list-group-item">Coloque a mistura em um bowl, acrescentar o Nescafé, o chocolate em pó CHOCOLATERIA e a água quente, mexa com um fuet, acrescente a farinha
              e continue mexendo para incorporar ar, em seguida o fermento em pó.</li>
                <li class="list-group-item">Despeje em uma forma untada (24 por 10) forma de pudim.</li>
                <li class="list-group-item">Levar ao forno médio-baixo (180°C), pré-aquecido, por cerca de 45 minutos, fazendo o teste do palito.</li>
                <li class="list-group-item">Sirva a seguir</li>
              </ol>


    </div>

    <div class="col"></div>

  </div>
</div> 
  );
}

export default Receitas;
