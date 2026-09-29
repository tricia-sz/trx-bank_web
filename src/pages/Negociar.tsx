import Container from "@/components/Container"
import { Card as SCard} from "@/components/ui/card"
import { Button } from "@base-ui/react"
import { Link } from "react-router-dom"

const Negociar = () => {
  return (
    <>
     <Container>
       <SCard className="containerrounded-none items-center">
       <h1>Page Negociar</h1>

        </SCard>
        <Button
          className="w-24 bg-blue-950 rounded-sm text-sky-400" 
          >
        <Link to="/">Voltar</Link>
        </Button>
     </Container>
    </>
  )
}

export default Negociar