import Footer from "../footer/page"
import Link from "next/link"
import Image from "next/image"

function Header(){
    return(
        <div>
            <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-white">
    <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
      <Image src="/logo.png" alt="logo" width={40} height={40}></Image>
      <span className="ml-3 text-xl">TechWise</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 font-medium " href="/">Home</Link>
      <Link className="mr-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 font-medium" href="/about">About</Link>
      <Link className="mr-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 font-medium" href="/contact">Contact</Link>
    </nav>
    <button className="hover:text-blue-500 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
        </div>
    )
}
export default Header