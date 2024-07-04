import React from 'react'

const Section = ({ id, children, backgroundColor, height, className }) => {
  return (
    <section id={id} className={`py-28 ${backgroundColor} ${height} ${className}`}>{children}</section>
  )
}
export default Section