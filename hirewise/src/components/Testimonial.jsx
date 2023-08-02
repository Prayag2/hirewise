import Title from "./Title.jsx";

function Testimonial({name, subtitle, comment, image, className}) {
  return (
    <div className={`p-10 bg-primary-alt flex flex-col items-center justify-center rounded-xl mb-5 lg:mb-0 lg:mr-10 last-of-type:mr-0 ${className}`}>
        <div className="flex items-center justify-center">
          <img className="w-24 h-24 object-cover rounded-full mr-10" alt="Profile" src={image}/>
            <div>
            <Title text={name}/>
            <p className="text-md">
              {subtitle}
            </p>
            </div>
        </div>
        <p className="mt-5 italic text-lg">
          “{comment}”
        </p>
    </div>
  )
}

Testimonial.defaultProps = {
  name: "Name",
  subtitle: "Person",
  comment: "Lorem ipsum dolor sit amet",
  image: "/man.jpg"
}

export default Testimonial;
