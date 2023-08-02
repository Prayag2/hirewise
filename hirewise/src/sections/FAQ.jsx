import Title from "../components/Title.jsx";
import Accordian from "../components/Accordian.jsx";

function FAQ() {
const faqQuestions = [
  {
    question: "What is HireWise?",
    answer: "HireWise is a cutting-edge recruitment platform that connects top talent with leading companies. Our mission is to streamline the hiring process and make it seamless for both job seekers and employers."
  },
  {
    question: "How does HireWise work for job seekers?",
    answer: "As a job seeker, you can create a profile showcasing your skills and experience. Our intelligent matching algorithm will then recommend job opportunities that align with your qualifications. Simply browse and apply for the jobs that interest you, and employers can contact you directly."
  },
  {
    question: "What types of job listings does HireWise offer for companies?",
    answer: "HireWise offers a wide range of job listings across various industries and roles, including Software Engineers, Product Managers, Data Scientists, and more. We cater to companies in India and worldwide, helping them find the perfect candidates for their open positions."
  },
  {
    question: "Is HireWise available for international companies to use?",
    answer: "Yes, absolutely! HireWise is not limited to any specific geographical region and can be used by companies from all around the world. Our platform is designed to connect global employers with talented individuals seeking exciting job opportunities."
  },
  {
    question: "How can companies get started with HireWise?",
    answer: "Getting started with HireWise is simple. Companies can create an account, post their job listings, and specify their requirements. Our platform will then match them with qualified candidates, making the hiring process more efficient and effective."
  },
  {
    question: "Does HireWise offer any additional support for companies during the hiring process?",
    answer: "Yes, we provide dedicated customer support and guidance to companies throughout the hiring journey. Our team is ready to assist with any queries, help optimize job listings, and offer best practices to ensure a successful hiring experience."
  },
  {
    question: "Are there any fees for job seekers to use HireWise?",
    answer: "No, HireWise is completely free for job seekers. You can create a profile, browse job listings, and apply for positions without any charges. Our focus is to connect job seekers with their dream opportunities at no cost."
  }
];

  return (
    <section id="sectionFAQ" className="mt-24 w-full text-center px-5 sm:px-8 md:px-10 lg:px-20">
      <Title text="Frequently Asked Questions" className="mb-8"/>

      {
        faqQuestions.map((ques, i) => (
          <Accordian
            key={i}
            question={ques.question}
            answer={ques.answer}
          />
        ))
      }

    </section>
  )
}

export default FAQ;
