import Container from "@/components/Container"
import { Link } from "react-router-dom"

const ContaInfo = () => {
  return (
    <>
      <Container className="text-3xl flex gap-8">
        <h1>Info da conta</h1>
        <div>
          <Link to='/conta/1'>Conta</Link>
        </div>
        
      </Container>
    </>
  )
}

export default ContaInfo