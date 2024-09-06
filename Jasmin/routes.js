import {BrowserRouter, Route, Routes} from 'react-router-dom' /* npm install react-router-dom */
import Home from './paginas/Home/index'
import Acai from './paginas/Acai';
import Receitas from './paginas/Receitas';
import Sorvetes from './paginas/Sorvetes';

function AppRoutes(){
    return(
        <BrowserRouter> {/* Navegador de rotas */}
            <Routes>        {/* Lista de rotas */}
                <Route path="/" element={<Home/>}></Route>     {/* path: Caminho que leva o usuário até a página */}
                <Route  path="/acai" element={<Acai/>}></Route>
                <Route  path="/receitas" element={<Receitas/>}></Route>
                <Route  path="/sorvetes" element={<Sorvetes/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;