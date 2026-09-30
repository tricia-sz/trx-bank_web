import Hero from "./Hero"
import Login from "./Login"

const Home = () => {
  return (
    <>
      <main className="w-full mx-auto justify-center  bg-gray-50 items-center pt-8 gap-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="container flex justify-baseline ">
            <Hero />
            <Login />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home