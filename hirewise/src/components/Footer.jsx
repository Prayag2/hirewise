import Title from "../components/Title.jsx";

function Footer() {
  return (
    <footer className="bg-gray-200 mt-16">
        <img alt="" src="/wave.svg" className="w-full"/>
      <div className="bg-primary text-center pt-5 pb-8 text-md md:text-xl mt-[-1rem]">
          <div className="flex justify-center md:space-x-6 flex-col md:flex-row">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Job Listings</a>
                <a href="">Contact Us</a>
            </div>
          <p className="mt-4">
            © 2023 HireWise. All rights reserved.
          </p>
        </div>
    </footer>
  )
}

export default Footer;
