import Image from "next/image";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import Hero from "./components/hero/page";
import Cards from "./components/cards/page";


export default function Home() {
  return (
   <div>
    <Header />
    <Hero />
    <Cards />
    <Footer />
   </div> 
  )
}
