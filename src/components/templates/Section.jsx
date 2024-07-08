const Section = ({ id, children, backgroundColor, height, className }) => {
  return (
    <section id={id} className={`py-12 xl:py-32 ${backgroundColor} ${height} ${className} mx-auto`}>{children}</section>
  )
}
export default Section