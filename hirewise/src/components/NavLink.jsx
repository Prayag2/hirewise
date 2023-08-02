function NavLink({text, onClick, isActive}) {
  return (
    <a className={`relative before:absolute before:bottom-[-0.40rem] before:h-[0.15rem] before:bg-accent before:rounded-lg before:transition-all ${isActive ? "before:w-full" : "before:w-0"} hover:before:w-full text-lg cursor-pointer`} onClick={onClick}>{text}</a>
  )
}

NavLink.defaultProps = {
  text: "Link",
  onClick: ()=>{},
  isActive: false
}

export default NavLink;
