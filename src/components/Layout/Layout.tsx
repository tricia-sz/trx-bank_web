import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}:any) {
  return (
    <>
      <Header />
       <div className="flex w-lg h-auto items-center justify-center mx-auto py-4">
         {children}
       </div>
      <Footer />
    </>
  )
}