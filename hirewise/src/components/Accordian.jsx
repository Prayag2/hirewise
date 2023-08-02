import { useState } from "react";

function Accordian({question, answer}) {
  let [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="mt-4">
      <button onClick={() => setShowAnswer(prev => !prev)} className="relative font-bold text-left text-xl rounded-lg block py-4 px-5 w-full bg-accent-alt select-none cursor-pointer">
        {question}
        {
            showAnswer ?
            <svg className="inline w-6 absolute right-5 h-6" width="800px" height="800px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-darkreader-mode="filter">
                <path d="M11.272 5.205L16.272 13.205C16.8964 14.2041 16.1782 15.5 15 15.5H5.00002C3.82186 15.5 3.1036 14.2041 3.72802 13.205L8.72802 5.205C9.31552 4.265 10.6845 4.265 11.272 5.205Z" fill="#000000"/>
            </svg>
            :
            <svg className="inline w-6 absolute right-5 h-6" width="800px" height="800px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-darkreader-mode="filter">
                <path d="M8.72798 15.795L3.72798 7.795C3.10356 6.79593 3.82183 5.5 4.99998 5.5L15 5.5C16.1781 5.5 16.8964 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31549 16.735 8.72798 15.795Z" fill="#000000"/>
            </svg>
        }
      </button>
      { showAnswer &&
      <p className="animate-fade-in mt-4 leading-relaxed text-xl text-left px-5">
        {answer}
      </p>
      }
    </div>
  )
}
Accordian.defaultProps = {
  "question": "Question",
  "answer": "Answer"
}

export default Accordian;
