import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Extrato from "./pages/Extrato";
import Pix from "./pages/Pix";
import Negociar from "./pages/Negociar";
import Layout from "./components/Layout/Layout";
import Conta from "./pages/Conta";

export function App() {


  return (
   <BrowserRouter>
    <Layout>
        <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/conta" element={<Conta/>}/>
        <Route path="/extrato" element={<Extrato/>}/>
        <Route path="/pix" element={<Pix/>}/>
        <Route path="/negociar" element={<Negociar/>}/>
      </Routes>
    </Layout>
      
   </BrowserRouter>
  )
}

export default App
