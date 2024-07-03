import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ButtonSecondary = ({ title, href, width, border, ...props }) => {
  return (
    <Link href={href} {...props}>
      <Button themeButton={'bg-secondary'} title={title} width={width} border={border} />
    </Link>
  )
}

export default ButtonSecondary