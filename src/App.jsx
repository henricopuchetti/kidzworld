import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Entrar from "./pages/Entrar"

function App(){
return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/entrar" element={<Entrar/>}/>
  </Routes>
  </BrowserRouter>
 </div>
)
}
export default App