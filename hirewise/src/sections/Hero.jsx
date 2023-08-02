import Button from "../components/Button.jsx";

function Hero({scrollToSection}) {
  return (
    <main className="w-full h-[60vh] px-5 sm:px-8 md:px-10 lg:px-20 flex items-center flex-col md:flex-row justify-center md:justify-between">
      <div className="w-full md:max-w-[40%] text-center md:text-left">
        <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl">Discover Your Path to Success</h1>
        <p className="text-md md:text-xl mt-4 capitalize">
          Unlock your true potential with our premiere recruiting solutions
        </p>
        <Button onClick={()=>scrollToSection("sectionHowItWorks")} text="How It Works" href="#" className="mt-8 mb-10 md:mb-0"/>
        <div className="hidden md:flex mt-8 items-center">
          <img alt="Scroll Wheel" src="/mouse.svg" className="mr-5"/>
          <p>
            Scroll to see more sections
          </p>
        </div>
      </div>
      <div className="hidden md:block md:w-[50%] lg:w-[40%]">
        <img alt="illustration" src="/hero-illustration.svg"/>
      </div>
    </main>
  )
}

export default Hero;
