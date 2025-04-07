import AnswerButton from "./AnswerButton";

const AnswerOptions = () => {
  const answers = [
    { letter: "A", text: "Google" },
    { letter: "B", text: "Microsoft" },
    { letter: "A", text: "Google" },
    { letter: "B", text: "Microsoft" },
  ];

  return (
    <section className="flex flex-wrap gap-10 self-center mt-16 ml-3.5 max-w-full w-[1235px] max-md:mt-10">
      {answers.map((answer, index) => (
        <AnswerButton
          key={`${answer.letter}-${index}`}
          letter={answer.letter}
          answer={answer.text}
        />
      ))}
    </section>
  );
};

export default AnswerOptions;
