interface CardProps {
  title: string
  imageUrl: string
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-[37.4rem] h-[60.3rem] font-alexandria">
      <img
        src={imageUrl}
        alt=""
        className="absolute h-[60.3rem] object-cover w-full"
        animation-button=""
      />
      <div className="absolute bottom-[-1rem] w-[24.2rem] left-1/2 -translate-x-1/2 space-y-[1rem]">
        <div className="text-center text-[2.8rem]" animation-button="">
          {title}
        </div>
        <button
          className="px-[4.7rem] py-[1.5rem] bg-black text-[1.4rem] text-white block mx-auto rounded-[1.2rem]"
          animation-button=""
        >
          Explor now
        </button>
      </div>
    </div>
  )
}

const Products = () => {
  const cards: CardProps[] = [
    {
      title: 'Vertical AI Chatbots',
      imageUrl: '/products/products-img1.png',
    },
    {
      title: 'AI-Powered Web Automation',
      imageUrl: '/products/products-img2.png',
    },
    {
      title: ' Multi-Agent + MCP System',
      imageUrl: '/products/products-img3.png',
    },
  ]
  return (
    <div className="py-52 font-alexandria space-y-[3rem]">
      <div
        className="space-y-[1.44rem] text-center w-[104.3rem] mx-auto"
        anime-block-wrap=""
      >
        <div
          className=" font-medium text-[5.98rem] text-[#030930]"
          animation-text=""
        >
          <div data-word="">Products</div>
        </div>
        <div
          className=" text-[1.8rem] text-[#0A1038]"
          headline-anime-in-wrap=""
        >
          Powerful AI products. End-to-end execution. From prototypes to
          real-world deployment — we deliver intelligent automation, vertical
          chatbots, and multi-agent systems with production-grade performance.
        </div>
      </div>
      <div className="flex gap-[1rem] justify-center">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />
        })}
      </div>
    </div>
  )
}

export default Products
