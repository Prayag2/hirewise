import Title from "../components/Title.jsx";
import { useEffect } from "react";

function Companies() {
  return (
    <section className="mt-24 w-full text-center px-5 sm:px-8 md:px-10 lg:px-20 relative">
      <Title text="Companies We've Served"/>
      <div className="mt-5 overflow-hidden flex gap-3">
        {
          [...Array(14)].map((x, i) => {
            return (
              <div key={i} className="animate-slide mr-10 min-w-[15rem] h-[5rem] bg-background-alt flex justify-center items-center rounded-xl">
                  <img className="max-w-[8rem]" alt="Image" src={`/logos/${(i)%7+1}.svg`}/>
                </div>
            )
          })
        }
       </div>
      <div className="mt-5 overflow-hidden flex gap-3">
        {
          [...Array(21)].map((x, i) => {
            return (
              <div key={i} className="animate-slide-reverse mr-10 min-w-[15rem] h-[5rem] bg-background-alt flex justify-center items-center rounded-xl">
                  <img className="max-w-[8rem]" alt="Image" src={`/logos/${(i)%7+8}.svg`}/>
                </div>
            )
          })
        }
       </div>
    </section>
  )
}

export default Companies;
