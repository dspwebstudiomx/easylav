import React from 'react'

const ButtonContainer = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-1 gap-8 mx-auto sm:ml-0">
      {children}
    </div>
  )
}

export default ButtonContainer