const QuestionDisplay = ({ question }) => {
  return (
    <section className="self-center mt-16 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-3xl font-medium">{question}</h1>
    </section>
  );
};

export default QuestionDisplay;
