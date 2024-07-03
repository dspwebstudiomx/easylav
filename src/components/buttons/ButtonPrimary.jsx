import Link from 'next/link'
import React from 'react'

const ButtonPrimary = ({ title, href, ...props }) => {
  return (
    <Link href={href} {...props}>
      <button className="bg-primary w-[250px] h-[80px] text-light  text-xl   font-semibold rounded-md border-4 sm:border-none hover:opacity-80 ">
        {title}
      </button>
    </Link>
  )
}

export default ButtonPrimary