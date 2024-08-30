import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="atv01">
      <label >
        <h1>O que é React JS</h1>
        <br></br>
          <div>
            <p>
            O React JS é uma ferramenta de programação muito conhecida para elaborar interfaces interativas e elaboradas em JavaScript. Desenvolvido pela empresa Facebook, o React se destaca pela sua abordagem direta e centrada em blocos para criar websites, sendo uma opção comum para projetos de diferentes tipos e níveis de complexidade. 
            </p>
            <p>
            A principal característica do React está na sua organização em blocos. Em vez de programar em HTML convencional, os programadores React criam blocos reutilizáveis que representam partes específicas da interface. Esses blocos podem ser combinados para criar interfaces elaboradas, tornando o desenvolvimento mais organizado e modular. 
            </p>
            <p>
            Além disso, o React utiliza uma técnica de renderização virtual, o que quer dizer que ele cria uma versão virtual da interface na memória antes de atualizá-la no navegador. Isso garante que o React apenas atualize as partes da interface que foram modificadas, resultando em uma experiência mais fluída e eficiente. Com a sua crescente popularidade, o React se tornou uma das ferramentas mais utilizadas no mundo do desenvolvimento web, contribuindo para a criação de interfaces modernas e dinâmicas.
            </p>
          </div>
      </label>
    </div>
  );
}

export default App;
