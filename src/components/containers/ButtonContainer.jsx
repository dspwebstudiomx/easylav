import React from 'react'

const ButtonContainer = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 mx-auto sm:ml-0 w-full items-center">
      {children}
    </div>
  )
}

export default ButtonContainer