import React from 'react'

const WhatIsGowithai = () => {
  return (
    <div className="mt-[26.8rem] mb-[12.2rem] relative w-[70.7rem] mx-auto text-center font-alexandria">
      <div
        className=" w-[35.4rem] h-[14.4rem] relative border-[0.1rem] border-[#bfbfbf] border-solid rounded-full flex items-center justify-center mx-auto"
        animation-button=""
      >
        <video
          src="/banner/Headervideo.mp4"
          muted
          loop
          autoPlay
          playsInline
          className="w-[34.4rem] h-[13.4rem]  object-cover absolute rounded-full"
        />
      </div>
      <div
        className="space-y-[1.5rem] mt-[2.9rem] text-[#030930] mb-[4.2rem]"
        anime-block-wrap=""
      >
        <div className="text-[5.98rem] font-medium " animation-text="">
          <div data-word="">What is Gowithai ?</div>
        </div>
        <div className="font-medium text-[1.8rem]" headline-anime-in-wrap="">
          gowith.ai is operated by AI OP PTE. LTD., a Singapore-based company
          specializing in full-stack AI development. Our team builds robust AI
          systems — from prototype to product — covering infrastructure,
          algorithms, interface, and automation.We offer: Custom AI solutions
          tailored to your industry, World-class engineering execution, Real
          products, not just proofs of concept
        </div>
      </div>
      <button className="text-[1.6rem] px-[5.3rem] py-[2.1rem] bg-[#f4faff] border-[0.3rem] border-solid border-[#d5ecff] underline">
        Explore
      </button>
    </div>
  )
}

export default WhatIsGowithai
