import { Button } from "@/components/ui/button"
import { Card, CardContent } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import { login } from "./services/login";

export function App() {
  const [ email, setEmail] = useState('')

  console.log('email digitado', email);

  return (
    <>
    <Layout>
      <Card className="bg-blue-950  items-center text-white">
       <div className="">
         <CardContent className="py-2">
          <Label className="mb-1" htmlFor="email">E-mail</Label>
          <Input type="email" id="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
         </CardContent>
         <CardContent>
          <Label className="mb-1" htmlFor="password">Senha</Label>
          <Input type="password" id="password"/>
         </CardContent>
       </div>
       <Button 
        className="bg-yellow-500 text-black hover:text-white"
        onClick={() => login(email)}
        >
          Entrar
        </Button>
      </Card>
    </Layout>
      
    </>
  )
}

export default App
