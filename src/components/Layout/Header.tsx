import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-center bg-blue-950 border-b-8 border-b-sky-400  shadow-2xl shadow-accent-foreground py-4">
      <div className="w-9/12 p-8 flex justify-between items-center">
         <Link to="/">
            <h1 className="text-yellow-500 text-4xl font-mono  font-extrabold">Trx<span className="text-white">Bank</span></h1>
         </Link>
         <nav className="w-full text-white flex gap-24  font-mono justify-center text-xl">
          <Link 
           className=""
            to="/"
            >
              Home
           </Link>
           <Link 
           className=""
            to="/conta"
            >
              Conta
           </Link>
           <Link 
            to="/extrato"
            >
              Extrato
           </Link>
           <Link 
            to="/pix"
            >
              Pix
           </Link>
           <Link 
            to="/negociar"
            >
              Negociar
           </Link>
         </nav>
         <div>
          <Link 
            className="text-amber-400 text-xl"
            to="/sair"
          >
           sair
          </Link>
         </div>
      </div>
    </header>
  )
}