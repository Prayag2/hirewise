import Title from "../components/Title.jsx";
import Testimonial from "../components/Testimonial.jsx";

function Testimonials() {
  let testimonials = [
    {
      name: "John Doe",
      subtitle: "Software Engineer",
      comment: "Thanks to HireWise, I landed my dream job at an amazing company. Highly recommended!",
      image: "/man.jpg"
    },
    {
      name: "Infosmart",
      subtitle: "Software Company",
      comment: "HireWise has been a game-changer for our hiring process. We found the perfect candidate within days!",
      image: "/company.jpg"
    },
    {
      name: "Emily Johnson",
      subtitle: "Product Manager",
      comment: "HireWise is a remarkable platform! Thanks to their curated job listings, I found my dream Product Manager role at a fast-growing startup. It's a must-try for job seekers!",
      image: "/woman.jpg"
    },
  ]

  return (
    <section id="sectionTestimonials" className="mt-24 w-full text-center px-5 sm:px-8 md:px-10 lg:px-20">
      <Title text="Real Experiences, Real Results" className="mb-8"/>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        {
          testimonials.map((testimonial, i)=> (
            <Testimonial
              key={i}
              name={testimonial.name}
              subtitle={testimonial.subtitle}
              comment={testimonial.comment}
              image={testimonial.image}
              className="lg:w-1/3"
            />
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials;
