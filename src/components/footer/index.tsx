import React, { useEffect } from 'react'
import { footerAnime } from '../../utils/animation'

type Link = {
  text: string
  href: string
}

interface ItemProps {
  title: string
  children: Link[]
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  return (
    <div className="space-y-[1.97rem] text-[1.8rem] text-[#676a7f] w-[16.9rem]">
      <div data-footer-anmine="">{title}</div>

      {children.map((item, index) => {
        return (
          <div
            key={index}
            className="text-black underline"
            data-footer-anmine=""
          >
            <a href={item.href}>{item.text}</a>
          </div>
        )
      })}
    </div>
  )
}

const Footer = () => {
  useEffect(() => {
    footerAnime()
  })
  const links: ItemProps[] = [
    {
      title: 'Who we are',
      children: [
        { text: 'Privacy Policy', href: '' },
        { text: 'Terms of Use', href: '' },
      ],
    },
    {
      title: 'Media',
      children: [
        { text: 'Twitter', href: '' },
        { text: 'Telegram', href: '' },
      ],
    },
    {
      title: 'Product',
      children: [
        { text: 'Tearline', href: '' },
        { text: 'Ghostdriver', href: '' },
        { text: 'Flowagent', href: '' },
      ],
    },
  ]
  return (
    <div className="mt-[8rem] ">
      <div className="py-[5.91rem] flex px-[4.4rem] font-alexandria justify-between">
        <div className="">
          <div className="flex ">
            <div className="text-[5rem]" data-footer-anmine="">
              Gowith.Ai
            </div>
          </div>
          <div className="text-[1.8rem]" data-footer-anmine="">
            <div className="line">Execution is AI</div>
            <div className="line">From prompt to production</div>
            <div className="line">AI. Not just imagined. Delivered</div>
          </div>
        </div>
        <div className="flex gap-[6.39rem]">
          {links.map((item, index) => {
            return (
              <Item key={index} title={item.title} children={item.children} />
            )
          })}
        </div>
      </div>
      <div
        className="pt-[3.55rem] pb-[6.21rem] text-[1.8rem] font-medium text-center"
        data-footer-anmine=""
      >
        Copyright © 2025 GowithAi
      </div>
    </div>
  )
}

export default Footer
