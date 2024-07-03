import React from 'react'

const ButtonContainer = ({ children, position, distance }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-8 mx-auto w-full items-center ${position} ${distance}`}>
      {children}
    </div>
  )
}

export default ButtonContainer