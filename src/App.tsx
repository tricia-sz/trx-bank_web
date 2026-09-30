import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Extrato from "./pages/Extrato";
import Pix from "./pages/Pix";
import Negociar from "./pages/Negociar";
import Layout from "./components/Layout/Layout";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import {AppContextProvider} from './components/AppContext'


export function App() {
  return (
   <BrowserRouter>
     <AppContextProvider>
      <Layout>
        <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/conta/:id" element={<Conta/>}/>
        <Route path="/conta/infoconta" element={<ContaInfo />}/>
        <Route path="/extrato" element={<Extrato/>}/>
        <Route path="/pix" element={<Pix/>}/>
        <Route path="/negociar" element={<Negociar/>}/>
      </Routes>
    </Layout>
     </AppContextProvider>
   </BrowserRouter>
  )
}

export default App
