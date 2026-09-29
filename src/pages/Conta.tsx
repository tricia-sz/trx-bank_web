import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import { Spinner } from "@/components/ui/spinner";
import Container from "@/components/Container";

interface IUserData {
  email: string
  password: string
  name: string
  saldo: number
}

export default function Conta() {
    const [userData, setUserData] = useState<null | IUserData>()
    
    useEffect(() => {
      const getData = async () => {
        const data: any | IUserData = await api

        setUserData(data)

      }

      getData()
    }, [])

    const actualData = new Date()
    
    console.log(userData);
  return (
     <Container className="mt-4">
      <Card className="w-sm justify-center items-center bg-blue-950  text-amber-300 shadow-2xl shadow-amber-300  mr-12 border-8 border-sky-400">
        <CardHeader className="w-full">
             {userData === undefined || userData === null ?
          (<Spinner className="flex size-8 items-center justify-center mx-auto" />) :
          (<>
            <CardTitle className="text-3xl w-full text-center"> {"Olá "}<span className="text-sky-400">{userData?.name}</span></CardTitle>
             <CardDescription className="text-2xl text-white text-center">{`${actualData?.getDate()}/${actualData?.getMonth()}/${actualData?.getFullYear()} - ${actualData?.getHours()}:${actualData?.getMinutes()}`}
             </CardDescription>
          </>)
        }
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
     </Container>
      
  )
}