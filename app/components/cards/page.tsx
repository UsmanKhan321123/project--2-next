import Image from "next/image"
function Cards(){
    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">COURSES</h1>
    </div>
    <div className="flex flex-wrap m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px] ">
           <Image alt="gallery" className="absolute w-full h-full bg-cover" src="/IMG-20241005-WA0093.jpg" width={300} height={250} /> 
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Graphics Designing</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">by Memoona Mushtaq</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0094.jpg" width={300} height={250} /> 
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Content Writting</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Shehzad Hashmi</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0100c.jpg" width={300} height={250} />  
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Microsoft Office </h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Miss Huma</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 sm:h-[150px] p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0096.jpg" width={300} height={250} /> 
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Social Media Marketing</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Imran Sheikh & Mahi Iqbal</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0097.jpg" width={300} height={250} /> 
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Wordpress Web Development</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Sohail Qayyum</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>          
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-contain" src="/IMG-20241005-WA0099.jpg" width={300} height={250} /> 
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Spoken English</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Qurat-ul-Ain</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0095.jpg" width={300} height={250} /> 
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Fiverr Freelancing</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Sohaib</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px]">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0101.jpg" width={300} height={250} /> 
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Video Editting & Animations</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Miss Sehrish</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-[280px] ">
        <Image alt="gallery" className="absolute w-full h-full  bg-cover" src="/IMG-20241005-WA0103.jpg" width={300} height={250} /> 
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Youtube Earning</h1>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">By Muhammad Osama</h2>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default Cards