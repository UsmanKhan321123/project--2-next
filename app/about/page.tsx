import Image from "next/image"
import Header from "../components/header/page"
import Footer from "../components/footer/page"

function About(){return(
  <div>
<Header />
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
    <h1 className="text-4xl mb-[30px] text-black">TechWise</h1>
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div className="p-4 sm:w-1/2  lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">30K+</h2>
        <p className="leading-relaxed">Students</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">15K</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">10</h2>
        <p className="leading-relaxed">Courses</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image src="/IMG-20241005-WA0092.jpg" alt="about" width={500} height={300}></Image>
    </div>
  </div>
</section>
<Footer />
  </div>
)

}
export default About