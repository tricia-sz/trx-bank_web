import { useEffect, useState } from "react";
import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Card as SCard } from "./ui/card";
import { Button } from "./ui/button";
import { login } from "@/services/login";
import { api } from "@/api/api";

interface IUserData {
  email: string
  password: string
  name: string
}

export default function Card() {
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
    <>
      <SCard className="w-full bg-blue-950 items-center text-white">
        <h2 className="font-mono text-xs  text-cyan-400">Faça Login</h2>
      <div className="justify-center items-center ">
        <span className="font-mono text-md font-bold text-yellow-400">{userData?.name}</span> 
      </div>
       <div className="w-md mx-auto">
         <CardContent className="mb-2 font-mono">
          <Label className="mb-1" 
            htmlFor="email"
            >E-mail
          </Label>
          <Input 
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
            className="mb-1" 
            htmlFor="password"
          >Senha
          </Label>
          <Input 
            type="password" 
            id="password"  
            placeholder="digite sua senha"
          />
         </CardContent>
       </div>
       <Button 
        className="bg-yellow-500 text-black hover:bg-cyan-500 font-mono"
        onClick={() => login(email)}
        >
          Entrar
        </Button>
      </SCard>
    </>
  )
}