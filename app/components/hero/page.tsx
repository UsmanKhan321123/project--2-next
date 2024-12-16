import Image from "next/image"
function Hero(){

    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">TechWise Courses
      
      </h1>
      <p className="mb-8 leading-relaxed">The affiiate partner of Learning With Earning (LWE) is the Pakistan's largest program offering scholarships in various courses to make Paksitan prosperous and digital globally.</p>
      <div className="flex justify-center ">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Enroll Now  &gt;</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
       <Image className="mt-[70px]" src="/IMG-20241005-WA0091.jpg" alt="hero" width={700} height={700}></Image>
    </div>
  </div>
</section>
        </div>
    )
}
export default Hero