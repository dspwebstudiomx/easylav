import React from 'react'

const Button = ({ themeButton, title, width, border }) => {
  return (
    <button className={`${themeButton} w-[250px] ${width} h-[60px] md:h-[80px] text-light  md:text-xl   font-semibold rounded-md hover:opacity-80 ${border}`}>
      {title}
    </button>
  )
}

export default Button