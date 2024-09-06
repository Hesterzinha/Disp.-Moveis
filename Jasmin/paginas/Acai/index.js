import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from '../Navbar';

function Acai() {
  return (
    <div class='container'>
      <Navbar/>

      <div class="row">
          <div class="col"></div>

          <div class="col-6">

          <h1 class='text-center'>Açaiterias de Três Lagoas-MS </h1> <br/>
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" >Nome</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Saboriá Sorvetes e Açaí</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>The Best Açaí</td>
              
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Sorveteria e Açaí do BIEL</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Áçai Super Fruta</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Fuscaçaí da Hora</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Di Matteo Açaí</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Açaí Lounge</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Panda sorvete e Açaí</td>
              </tr>
            </tbody>
          </table>

    </div>

    <div class="col"></div>

  </div>
     
    
</div>
  );
}

export default Acai;
