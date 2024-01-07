import Link from 'next/link'
import React from 'react'

const NavLink = ({href,bgColor,text,hoverColor}) => {
  return (
    <Link href={href} className={`${bgColor} px-10 py-4 font-bold shadow hover:shadow-xl ${hoverColor}`}>{text}</Link>
  )
}

export default NavLink