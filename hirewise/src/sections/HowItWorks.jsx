import NavLink from "../components/NavLink.jsx";
import Title from "../components/Title.jsx";
import Step from "../components/Step.jsx";
import { useState } from "react";

function HowItWorks() {
  let [tabOne, setTabOne] = useState(true);
  const companySteps = [
    "Post a job opening on our easy to use recruitment portal",
    "Get the best possible algorithm based recommendations of possible candidates",
    "Connect, interview and hire your perfect employee right from this website"
  ];
  const jobSeekerSteps = [
    "Select your preferences and upload your resume",
    "Get intelligent job recommendations from us",
    "Apply for the job and get an interview within 2 days"
  ];

  return (
    <section id="sectionHowItWorks" className="w-full mt-8 text-center">
      <Title text="How It Works"/>
      <nav className="mt-6 space-x-10">
        <NavLink text="For Companies" onClick={() => setTabOne(true)} isActive={tabOne ? true : false}/>
        <NavLink text="For Job Seekers" onClick={() => setTabOne(false)} isActive={tabOne ? false : true}/>
      </nav>

      { tabOne ?
        <div key={tabOne} className="animate-fade-in w-[80%] bg-accent-alt h-5vh mx-auto mt-10 p-10 rounded-3xl">
        <Title text="For Companies"/>
        <p className="text-xl mt-3 mb-12">
          Here's a three step process for companies to find the perfect candidates
        </p>

        {companySteps.map((step, i) => (
          <Step key={i} text={step} index={i+1}/>
        ))}
      </div>
        :
        <div key={tabOne} className="animate-fade-in w-[80%] bg-accent-alt h-5vh mx-auto mt-10 p-10 rounded-3xl">
        <Title text="For Job Seekers"/>
        <p className="text-xl mt-3 mb-12">
          Here's a three step process for job seekers to find their dream job
        </p>
        {jobSeekerSteps.map((step, i) => (
          <Step key={i} text={step} index={i+1}/>
        ))}
      </div>
      }
    </section>
  )
}

export default HowItWorks;
