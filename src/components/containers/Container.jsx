import React from 'react'

const Container = ({ id, children }) => {
  return (
    <div id={id} className='mx-auto grid gap-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl w-[80%]'>
      {children}
    </div>
  )
}

export default Container