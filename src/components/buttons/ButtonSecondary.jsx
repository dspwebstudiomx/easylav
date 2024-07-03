import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ButtonSecondary = ({ title, href, ...props }) => {
  return (
    <Link href={href} {...props}>
      <Button themeButton={'bg-secondary'} title={title} />
    </Link>
  )
}

export default ButtonSecondary