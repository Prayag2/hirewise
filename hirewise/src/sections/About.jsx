import Title from "../components/Title.jsx";

function About() {
  return (
    <section className="mt-[-5rem]">
      <img id="sectionAbout" alt="" src="/wave.svg" className="w-full"/>
      <div className="py-5 md:py-0 text-center bg-primary mt-[-0.25rem]">
        <Title text="About Us"/>
        <p className="text-xl lg:text-2xl w-3/4 mx-auto mt-3 lg:leading-relaxed">
          At HireWise, we are passionate about connecting exceptional talent with innovative companies across the globe. Our mission is to revolutionize the recruitment process and bridge the gap between top-tier candidates and leading organizations. With our cutting-edge technology and dedicated team, we make hiring and job seeking seamless, efficient, and rewarding.
        </p>
      </div>
      <img alt="" src="/wave.svg" className="w-full rotate-180 mt-[-0.25rem]"/>
    </section>
  )
}

export default About;
