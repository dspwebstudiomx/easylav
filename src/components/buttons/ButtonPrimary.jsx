import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ButtonPrimary = ({ title, href, ...props }) => {
  return (
    <Link href={href} {...props}>
      <Button themeButton={'bg-primary'} title={title} />
    </Link>
  )
}

export default ButtonPrimary