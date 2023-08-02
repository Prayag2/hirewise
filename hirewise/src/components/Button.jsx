function Button({text, onClick, className}) {
  return (
    <button onClick={onClick} className={`inline-block h-10 px-7 leading-10 rounded-full  transition bg-primary hover:bg-primary-dark ${className}`}>{text}</button>
  )
}
export default Button;
