function Step({text, index}) {
  return (
    <div className="mb-6 last-of-type:mb-0">
      <h1 className="align-middle inline-block w-4 text-5xl md:mr-10 font-bold text-accent">{index}</h1>
      <p className="align-middle text-xl inline-block">
        {text}
      </p>
    </div>
  )
}

Step.defaultProps = {
  text: "Lorem ipsum dolor sit amet.",
  index: 1
}

export default Step;
