function Title({text, className}) {
  return (
    <h3 className={`font-display text-2xl md:text-3xl font-bold ${className}`}>
      {text}
    </h3>
  )
}

Title.defaultProps = {
  text: "",
  className: ""
}

export default Title;
