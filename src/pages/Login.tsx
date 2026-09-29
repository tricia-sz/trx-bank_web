import { api } from "@/api/api";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { login } from "@/services/login";
import { Button, Input } from "@base-ui/react";
import { useEffect, useState } from "react";

interface IUserData {
  email: string
  password: string
  name: string
}

export default function Login() {
   const [ email, setEmail] = useState<string>('')
    const [userData, setUserData] = useState<null | IUserData>()
    
    useEffect(() => {
      const getData = async () => {
        const data: any | IUserData = await api

        setUserData(data)

      }

      getData()
    }, [])

    console.log(userData);
  return (
     <Card className="w-md bg-blue-950 items-center text-amber-300 shadow-2xl shadow-amber-300  mr-12 border-8 border-sky-400">
        {
          // userData === null || userData === undefined ? <h1>Carregando</h1> : <h1>Informações carregadas</h1>
        }
        <h2 className="font-mono  text-sky-300">Faça Login</h2>
      <div className="justify-center items-center ">
        <span className="font-mono text-2xl font-bold text-white">{userData?.name}</span> 
      </div>
       <div className=" mx-auto rounded-full">
         <CardContent className="mb-2 font-mono">
          <Label className="mb-1 font-semibold " 
            htmlFor="email"
            >E-mail
          </Label>
          <Input 
            className="rounded-sm border border-sky-400 p-2 text-center"
            type="email" 
            id="email" 
            placeholder="digite seu email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
          />
         </CardContent>
         <CardContent 
          className="py-2 font-mono"
          >
          <Label 
            className="mb-1 font-semibold" 
            htmlFor="password"
          >Senha
          </Label>
          <Input 
            className="rounded-sm border border-sky-400 p-2 text-center"
            type="password" 
            id="password"  
            placeholder="digite sua senha"
          />
         </CardContent>
       </div>
          <Button 
            className="w-1/4 rounded-sm text-black hover:font-bold hover:bg-sky-500 bg-amber-300 hover:text-black font-mono py-2"
            onClick={() => login(email)}
            >
              Entrar
          </Button>
      </Card>
  )
}