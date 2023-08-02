import NavLink from "./NavLink.jsx";
import { useState } from "react";

export default function Header({scrollToSection}) {
  let [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(prev => !prev);
  }
  function scrollFunc(id) {
    setSidebarOpen(false);
    scrollToSection(id);
  }

  return (
    <header className="w-full h-[15vh] justify-between bg-slate-100 flex items-center py-9 px-5 sm:px-8 md:px-10 lg:px-20">
      <a href="/" className="h-full">
        <img alt="HireWise" src="/logo.svg" className="h-full" />
      </a>

      <nav className="hidden lg:block space-x-10">
        <NavLink onClick={()=>scrollFunc("sectionAbout")} text="About Us"/>
        <NavLink onClick={()=>scrollFunc("sectionHowItWorks")} text="How it Works"/>
        <NavLink onClick={()=>scrollFunc("sectionTestimonials")} text="Reviews"/>
        <NavLink onClick={()=>scrollFunc("sectionFAQ")} text="FAQ"/>
      </nav>



      <nav className={`fixed top-0 left-0 h-full w-full bg-accent-alt z-10 flex flex-col justify-center items-center space-y-8 transition-[left] ${sidebarOpen ? "left-0" : "left-[-100%]"}`}>
      <button className="absolute top-8 right-5" onClick={()=>toggleSidebar()}>
        <svg className="w-10 h-10" width="155px" height="155px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#050505" stroke="#050505"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#050505" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
      </button>
        <NavLink onClick={()=>scrollFunc("sectionAbout")} text="About Us"/>
        <NavLink onClick={()=>scrollFunc("sectionHowItWorks")} text="How it Works"/>
        <NavLink onClick={()=>scrollFunc("sectionTestimonials")} text="Reviews"/>
        <NavLink onClick={()=>scrollFunc("sectionFAQ")} text="FAQ"/>
      </nav>

      <button className="lg:hidden" onClick={()=>toggleSidebar()}>
        <svg className="w-10 h-10" width="203px" height="203px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#050505"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </button>
    </header>
  )
}
