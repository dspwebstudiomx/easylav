import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ButtonPrimary = ({ title, href, border, ...props }) => {
  return (
    <Link href={href} {...props}>
      <Button themeButton={'bg-primary'} title={title} border={border} />
    </Link>
  )
}

export default ButtonPrimary