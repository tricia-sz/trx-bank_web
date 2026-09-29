import { Card as SCard} from "@/components/ui/card"
import { Button } from "@base-ui/react"
import { Link } from "react-router-dom"

const Negociar = () => {
  return (
    <>
      <SCard className="bg-amber-400 rounded-none items-center">
      <h1>Page Negociar</h1>

      </SCard>
      <Button
        className="w-24 bg-blue-950 rounded-sm text-sky-400" 
        >
      <Link to="/">Voltar</Link>
      </Button>
    </>
  )
}

export default Negociar