import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { api } from "@/api/api";
import { Spinner } from "@/components/ui/spinner";
import Container from "@/components/Container";
import {  useNavigate, useParams } from "react-router-dom";


interface IUserData {
  email: string
  password: string
  name: string
  balance: number
  id: string
}

export default function Conta() {
  const [userData, setUserData] = useState<null | IUserData>()
  const {id} = useParams()
  const actualData = new Date()
  const navigate = useNavigate()
  
  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      
      setUserData(data)
      
    }
    
    getData()
  }, [])


  if(userData && id !== userData.id ) {
    navigate('/')
  }

  console.log(userData);
  return (
    <>
      <Container className="mt-4">
        <Card className="w-sm justify-center items-center bg-blue-950  text-amber-300 shadow-2xl shadow-amber-300  mr-12 border-4 border-sky-400">
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

         <Card className="w-sm justify-center items-center bg-blue-950  text-amber-300 shadow-2xl shadow-amber-300  mr-12 border-4 border-sky-400">
          <CardHeader className="w-full">
            {userData === undefined || userData === null ?
              (<Spinner className="flex size-8 items-center justify-center mx-auto" />) :
              (<>
                <CardTitle className="text-3xl w-full text-center"> {""}<span className="text-sky-400">Saldo</span></CardTitle>
                <CardDescription className="text-2xl text-white text-center"><span className="text-amber-300">R$ </span>{`23234`}
                </CardDescription>
              </>)
            }
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>
      </Container>

    </>

  )
}