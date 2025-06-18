const Contact = () => {
  return (
    <div id="contact" className="mt-[25.8rem] mb-[31.8rem] font-alexandria">
      <div className="text-[5.9rem] font-medium text-center" animation-text="">
        <div data-word="">Contact Us</div>
      </div>
      <div className="flex items-center gap-[5.28rem] justify-center">
        <div
          className="h-[13.3rem] rounded-full bg-gradient-to-r from-[#e3f2ea]  from-[21.2%] to-[rgba(14,166,94,0)] to-[54.7%] [--tw-gradient-angle:96deg] flex items-center justify-center w-[50rem]"
          animation-element=""
        >
          <div className="h-[9.12rem] rounded-full bg-gradient-to-r from-[#c4e7d4] from-[21.18%] to-[rgba(14,166,94,0)] to-[54.7%] [--tw-gradient-angle:96deg] w-[45.7rem] flex items-center justify-center">
            <div className="bg-black h-[4.91rem] w-[41.5rem] rounded-full text-white text-[2.1rem] flex justify-center items-center gap-[0.7rem]">
              <div className="size-[1.22rem] bg-[#55b86f] rounded-full"></div>
              Let’s build the future together.
            </div>
          </div>
        </div>
        <div className="flex gap-[1.59rem] items-center" animation-element="">
          <img
            src="/contact/email.png"
            alt=""
            className="w-[8rem] h-[6.11rem]"
          />
          <div className="font-medium text-[2.1rem]">gowithai@google.com</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
