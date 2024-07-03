import React from 'react'

const Button = ({ themeButton, title }) => {
  return (
    <button className={`${themeButton} w-[250px] h-[80px] text-light  text-xl   font-semibold rounded-md border-4 sm:border-none hover:opacity-80`}>
      {title}
    </button>
  )
}

export default Button