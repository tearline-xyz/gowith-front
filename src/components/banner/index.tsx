const Header = () => {
  return (
    <div className="flex mx-48 justify-between z-10 relative px-[2.4rem] py-[4rem]">
      <div className="flex">
        <img src="" alt="" />
        <div
          className="text-[3.2rem] font-alexandria font-medium text-[#0A1038]"
          animation-button=""
        >
          gowith.ai
        </div>
      </div>
      <div className="flex gap-11">
        <a
          href="#products"
          className="font-alexandria font-medium text-[1.7rem] text-[#0A1038] cursor-pointer"
          animation-button=""
        >
          Products
        </a>
        <a
          href="#contact"
          className="font-alexandria font-medium text-[1.7rem] text-[#0A1038] cursor-pointer"
          animation-button=""
        >
          Contact
        </a>
      </div>
      <div>
        <button
          className="font-alexandria text-[1.7rem] font-medium text-[#FFF] bg-[#202123] py-[1.2rem] px-[2.9rem] rounded-[1.7rem]"
          animation-button=""
        >
          login
        </button>
      </div>
    </div>
  )
}

function Banner() {
  return (
    <>
      <div className="h-360 bg-transparent relative">
        <Header />
        <video
          src="/banner/Headervideo.mp4"
          muted
          loop
          autoPlay
          preload="auto"
          playsInline
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="relative z-10 mt-[18.5rem] ml-[14.4rem] space-y-[1rem]">
          <div
            className="font-alexandria text-[5.9883rem] w-[57.6rem] font-medium flex flex-wrap whitespace-pre"
            hero-headline=""
          >
            <div data-word="">Go </div>
            <div data-word="">with AI. </div>
            <div data-word="">Build </div>
            <div data-word="">the future.</div>
          </div>
          <div className="font-alexandria text-[1.8rem] w-[45rem] font-medium flex flex-wrap">
            <div banner-animation-line="">
              Powerful AI products. End-to-end execution.
            </div>

            <div banner-animation-line="">
              From prototypes to real-world deployment
            </div>
          </div>
        </div>
        <img
          src="/banner/Gradient.png"
          alt=""
          className="absolute bottom-0 z-10 "
        />
      </div>
    </>
  )
}

export default Banner
