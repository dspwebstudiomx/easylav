import React from 'react'

const Container = ({ id, children, className }) => {
  return (
    <div id={id} className={`${className} flex flex-col gap-12 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl sm:w-[100%] w-[80%] mx-auto px-6 sm:px-12 xl:px-0`}>
      {children}
    </div>
  )
}

export default Container